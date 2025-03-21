import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://api.cybermatrix1337.in/api/v1/user/all", { withCredentials: true });
        setUsers(response.data.users);
      } catch (error) {
        console.error("Failed to fetch users", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`https://api.cybermatrix1337.in/api/v1/user/delete/${userId}`, { withCredentials: true });
      setUsers(users.filter(user => user._id !== userId));
    } catch (error) {
      console.error("Failed to delete user", error);
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">User List</h1>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <div className="space-y-4">
          {users.map((user) => (
            <div key={user._id} className="flex justify-between items-center p-4 border rounded-lg shadow-sm">
              <div>
                <p className="text-lg font-medium">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <Button variant="destructive" onClick={() => handleDelete(user._id)}>
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserList;
