import { Modal } from "antd";
import React from "react";
import { CloseOutlined } from "@ant-design/icons";

type HandleModalProps = {
  title: string;
  lobby: string;
  address: string;
  srcMap: string;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleSubmit: () => void;
};

const HandleModal: React.FC<HandleModalProps> = ({
  title,
  lobby,
  address,
  srcMap,
  isModalOpen,
  handleCancel,
  handleSubmit,
}) => {
  const customCloseIcon = (
    <CloseOutlined className="text-gray-400 bg-transparent hover:bg-theme hover:text-white rounded-lg text-sm w-6 h-6 ml-auto inline-flex justify-center items-center transition-color duration-300" />
  );

  return (
    <Modal
      title={<div className="text-xl font-semibold text-gray-900">{title}</div>}
      open={isModalOpen}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[]}
      width="80%"
      closeIcon={customCloseIcon}
    >
      <span className="opacity-50 text-sm">
        {lobby}
        <br />
        {address}
      </span>
      <div className="py-1">
        <iframe
          src={srcMap}
          width={"100%"}
          height={300}
          style={{
            border: 1,
            borderRadius: "10px",
            margin: "auto",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </Modal>
  );
};

export default HandleModal;
