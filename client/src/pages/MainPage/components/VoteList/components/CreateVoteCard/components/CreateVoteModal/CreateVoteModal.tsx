import React from "react";
import { Modal, Form, Input, Switch } from "antd";
import { CreateVoteRequest } from "@/interface";
import { useUserSelector } from "@/flux";

interface CreateVoteModalProps {
  isOpen: boolean;
  onOk: (values: CreateVoteRequest) => void;
  onCancel: () => void;
}

const CreateVoteModal: React.FC<CreateVoteModalProps> = ({
  isOpen,
  onOk,
  onCancel,
}) => {
  const [form] = Form.useForm();
  const user = useUserSelector();

  const handleCancel = () => {
    onCancel();
  };

  return (
    <Modal
      title="투표 생성"
      open={isOpen}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            const params = {
              userId: user?.userId,
              ...values,
            };
            onOk(params);
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
          label="제목"
          rules={[{ required: true, message: "제목을 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="설명"
          rules={[{ required: true, message: "설명을 입력해 주세요." }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="isAnonymous"
          label="익명"
          valuePropName="checked"
          initialValue={false}
          rules={[{ required: true, message: "옵션을 선택해 주세요." }]}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateVoteModal;
