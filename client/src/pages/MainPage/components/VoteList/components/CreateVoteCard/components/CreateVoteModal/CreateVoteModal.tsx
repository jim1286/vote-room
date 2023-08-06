import React from 'react';
import dayjs from 'dayjs';
import { Modal, Form, Input, DatePicker, Switch } from 'antd';
import { CreateRoomInfo } from '@/interface';
import type { RangePickerProps } from 'antd/es/date-picker';

interface CreateVoteModalProps {
  isOpen: boolean;
  onOk: (values: CreateRoomInfo) => void;
  onCancel: () => void;
}

const CreateVoteModal: React.FC<CreateVoteModalProps> = ({ isOpen, onOk, onCancel }) => {
  const [form] = Form.useForm();

  const handleCancel = () => {
    onCancel();
  };

  const disabledDate: RangePickerProps['disabledDate'] = (current) => {
    return current.add(1, 'day') && current.add(1, 'day') < dayjs().endOf('day');
  };

  return (
    <Modal
      title="투표 생성"
      open={isOpen}
      onOk={() => {
        form
          .validateFields()
          .then((values: CreateRoomInfo) => {
            form.resetFields();
            onOk(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
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
        style={{ maxWidth: 600, margin: '30px' }}
      >
        <Form.Item
          name="title"
          label="제목"
          rules={[{ required: true, message: '제목을 입력해 주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="설명"
          rules={[{ required: true, message: '설명을 입력해 주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="deletedAt"
          label="종료 날짜"
          rules={[{ required: true, message: '날짜를 입력해 주세요.' }]}
        >
          <DatePicker
            format="YYYY-MM-DD HH:mm"
            disabledDate={disabledDate}
            showTime={{ defaultValue: dayjs('00:00', 'HH:mm') }}
          />
        </Form.Item>
        <Form.Item
          name="anonymous"
          label="익명"
          valuePropName="checked"
          initialValue={false}
          rules={[{ required: true, message: '옵션을 선택해 주세요.' }]}
        >
          <Switch />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateVoteModal;
