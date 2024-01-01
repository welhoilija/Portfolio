import React, { useState } from 'react';

function ContactPage() {
  const [text, setText] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handletextchange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setText(e.target.value);
  };

  const handlenamechange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setName(e.target.value);
  };

  const handleSubmitButtonPress = () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text, name }),
    };
    fetch('/api/Contact', requestOptions)
      .then((response) => response.json())
      .then(() => setIsSubmitted(true));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h4 className="text-2xl font-bold mb-4 text-white">Contact me!</h4>
      <div className="w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            className="bg-gray-800 border-b border-gray-600 text-white w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            id="input-with-icon-textfield"
            placeholder="Name"
            onChange={handlenamechange}
          />
        </div>
        <div className="mb-6">
          <textarea
            className="bg-gray-800 border-b border-gray-600 text-white w-full py-2 px-3 focus:outline-none focus:border-blue-500"
            id="standard-multiline-static"
            placeholder="Message"
            onChange={handletextchange}
          ></textarea>
        </div>
        <div className="mb-4 flex justify-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmitButtonPress}
          >
            Send message
          </button>
        </div>
        {isSubmitted && (
          <div id="message">
            <p>Your form was uploaded successfully</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPage;