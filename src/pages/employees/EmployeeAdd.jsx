import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Page from "../../layout/Page";
import PageHeader from "../../layout/PageHeader";
import { useForm } from "react-hook-form";
import EmailField from "../../components/Fields/EmailField";
import PasswordField from "../../components/Fields/PasswordField";
import TextInput from "../../components/Fields/TextInput";
import AddForm from "../../components/Forms/AddForm";

const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required."),
    username: Yup.string().required("Required.")
        .trim()
        .min(3, 'Should be at least 3 characters')
        .max(15, 'Should be at most 15 characters')
        .matches(/^[a-z0-9]+$/, 'Only lowercase letters and numbers'),
    phone: Yup.string(),
    employee_id: Yup.string(),
    email: Yup.string().required("Required.").email("Email is Invalid!"),
    password: Yup.string().required("Required."),
});


const EmployeeAdd = () => {
    const { control, handleSubmit, } = useForm({
        resolver: yupResolver(validationSchema), mode: "onChange", defaultValues: {
            name: "",
            username: "",
            phone: "",
            employee_id: "",
            email: "",
            password: ","
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Page title="Add an Employee">

            <PageHeader title="Add an Employee" btn={false}
                breadcrumbLinks={[
                    { label: "Manage Employees", href: '/employees/manage' }
                ]}
                currentPage="Add Employee" />

            <AddForm handleSubmit={handleSubmit(onSubmit)}  >
                <TextInput
                    name="name"
                    control={control}
                    autoFocus
                    label={"Full Name"}
                    errorMsg required />

                <TextInput
                    name="username"
                    control={control}
                    label={"Username"}
                    errorMsg required />
                <TextInput
                    name="phone"
                    type="tel"
                    control={control}
                    label={"Phone Number"}
                    errorMsg />
                <TextInput
                    name="employee_id"
                    control={control}
                    label={"Employee ID"}
                    errorMsg />
                <EmailField
                    name="email"
                    control={control}
                    label={"Email"}
                    errorMsg required />
                <PasswordField
                    name="password"
                    control={control}
                    label={"Enter Password"}
                    errorMsg required />
            </AddForm >

        </Page >
    )
}

export default EmployeeAdd;