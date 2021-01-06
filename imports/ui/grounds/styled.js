import styled from 'styled-components';
import 'antd/dist/antd.css';
import { InputNumber, Table, Button } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

export const InputNumberStyled = styled(InputNumber)`
    width: 100%;
`

//ShowListGrounds
export const EditButtonStyled = styled(EditOutlined)`
    color: green;
`
export const DeleteButtonStyled = styled(DeleteOutlined)`
    color: red;
`
export const TableStyled = styled(Table)`
    margin: 10px 30px;
`
export const FormButtonStyled = styled(Button)`
    left: 35%;
    margin-right: 10px;
    &:hover{
        background-color: #40a9ff;
        color: white;
    }
`