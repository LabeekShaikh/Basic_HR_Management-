// UserPost.js

import React, { useState } from "react";

const UserPost = () => {
  // Initial mock data
  const initialUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];

  const initialPosts = [
    { id: 1, userId: 1, content: "Hello from Alice!" },
    { id: 2, userId: 1, content: "Alice again!" },
    { id: 3, userId: 2, content: "Hi from Bob!" },
  ];

  // State management
  const [users] = useState(initialUsers);
  const [posts, setPosts] = useState(initialPosts);
  const [selectedUser, setSelectedUser] = useState(null);
  const [newPostContent, setNewPostContent] = useState("");

  // Select a user
  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  // Add a new post
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPostContent.trim()) return;

    const newPost = {
      id: Date.now(),
      userId: selectedUser.id,
      content: newPostContent.trim(),
    };

    setPosts([...posts, newPost]);
    setNewPostContent("");
  };

  // Filter posts by selected user
  const userPosts = posts.filter(
    (post) => selectedUser && post.userId === selectedUser.id
  );

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">User & Post Association</h1>

      {/* User List */}
      <div className="p-4 border rounded shadow mb-6">
        <h2 className="text-xl font-semibold mb-2">Select a User</h2>
        {users.map((user) => (
          <button
            key={user.id}
            className="block text-blue-600 hover:underline mt-1"
            onClick={() => handleUserSelect(user)}
          >
            {user.name}
          </button>
        ))}
      </div>

      {selectedUser && (
        <>
          <div className="p-4 border rounded shadow mb-4">
            <h2 className="text-xl font-semibold">
              Posts by {selectedUser.name}
            </h2>
            <ul className="list-disc list-inside mt-2">
              {userPosts.map((post) => (
                <li key={post.id} className="mt-1">
                  {post.content}
                </li>
              ))}
              {userPosts.length === 0 && (
                <li className="text-gray-500 italic">No posts yet.</li>
              )}
            </ul>
          </div>

          <form
            onSubmit={handleAddPost}
            className="p-4 border rounded shadow bg-gray-50"
          >
            <h3 className="font-medium mb-2">Add a New Post</h3>
            <input
              type="text"
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="Write your post here..."
              className="w-full border p-2 rounded mb-2"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Post
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default UserPost;
