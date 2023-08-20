import React from "react";
import { Form, Input, Modal } from "antd";

interface AddOptionModalProps {
  isOpen: boolean;
  onOk: (values: string) => void;
  onCancel: () => void;
}

const AddOptionModal: React.FC<AddOptionModalProps> = ({
  isOpen,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      title="옵션 추가"
      open={isOpen}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onOk(values.title);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
      onCancel={handleCancel}
      centered
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18 }}
        layout="horizontal"
        style={{ maxWidth: 600, margin: "30px" }}
      >
        <Form.Item
          name="title"
          label="옵션"
          rules={[{ required: true, message: "옵션을 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddOptionModal;
