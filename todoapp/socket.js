// Client-side code
import { io } from 'socket.io-client';
const socket = io('http://localhost:3000');

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('userStatusUpdate', (updatedUsers) => {
      setUsers(updatedUsers);
    });
  }, []);

  function handleLogin() {
    // Send a message to the server to update the user's status
    socket.emit('login', { userId: 123 });
  }

  function handleLogout() {
    // Send a message to the server to update the user's status
    socket.emit('logout', { userId: 123 });
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          {user.name} is {user.online ? 'online' : 'offline'}
        </div>
      ))}
      <button onClick={handleLogin}>Log in</button>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
}

// Server-side code
const httpServer = require('http').createServer();
const io = require('socket.io')(httpServer);

const users = {};

io.on('connection', (socket) => {
  console.log('Client connected');

  socket.on('login', (data) => {
    const { userId } = data;
    users[userId] = { id: userId, name: 'User ' + userId, online: true };
    io.emit('userStatusUpdate', Object.values(users));
  });

  socket.on('logout', (data) => {
    const { userId } = data;
    users[userId].online = false;
    io.emit('userStatusUpdate', Object.values(users));
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected');
  });
});

httpServer.listen(3000, () => {
  console.log('Server listening on port 3000');
});
