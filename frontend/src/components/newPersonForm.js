import React from 'react';
import { Form, Input, Button } from 'antd';


const NewPersonForm = (props) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        const { submitNewPerson } = props;
        submitNewPerson(values, form.resetFields);
    };

    return (
        <div>
            <Form
                layout={'inline'}
                form={form}
                onFinish={onFinish}
            >
                <Form.Item rules={[{ required: true, message: 'Required' }]} name="first_name" label="First Name">
                    <Input placeholder="first name" />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Required' }]} name="last_name" label="Last Name">
                    <Input placeholder="last name" />
                </Form.Item>
                <Form.Item rules={[{ required: true, message: 'Required' }]} name="phone" label="Phone">
                    <Input placeholder="phone" />
                </Form.Item>
                <Form.Item>
                    <Button loading={props.loading} type="primary" htmlType="submit">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default NewPersonForm;