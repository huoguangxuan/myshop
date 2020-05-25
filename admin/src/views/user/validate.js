const rules= {
    name: [
        { required: true, message: '请输入客户名称', trigger: 'blur' },
    ],
    level:[
        { required: true, message: '请选择供货质量等级', trigger: 'blur' },
    ]
}
export default rules