import { useState } from "react";

// Task 1: TextUpdater Component
function TextUpdater() {
  const [text, setText] = useState("");
  return (
    <div className="p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 rounded"
        placeholder="Type something..."
      />
      <p className="mt-2">You typed: {text}</p>
    </div>
  );
}

// Task 2: Form with Submit
function InputForm() {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted value:", input);
  };
  return (
    <form onSubmit={handleSubmit} className="p-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded mr-2"
        placeholder="Enter text"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
    </form>
  );
}

// Task 3: UserCard Component
function UserCard({ name, email }) {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}

// Task 4: Styled Button Component
function StyledButton() {
  return (
    <button
      onClick={() => console.log("Button clicked!")}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
    >
      Click Me
    </button>
  );
}

// Task 5: LoginForm Component
function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };
  
  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded shadow-lg">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded w-full mb-2"
        placeholder="Password"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">Login</button>
    </form>
  );
}

export { TextUpdater, InputForm, UserCard, StyledButton, LoginForm };
