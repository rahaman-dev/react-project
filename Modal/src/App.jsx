import React, { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  return (
    <>
      {openModal ? null : (
        <>
          {" "}
          <div className="flex items-center justify-center gap-4 mt-10">
            <img
              src="https://placehold.it/40x40"
              alt=""
              className="rounded-full"
            />
            <div
              onClick={handleOpenModal}
              className="cursor-pointer flex items-center justify-center bg-gray-400 rounded-full p-2 w-[400px]"
            >
              <p>Post Now</p>
            </div>
          </div>
        </>
      )}
      <Modal openModal={openModal}></Modal>
    </>
  );
};

export default App;
