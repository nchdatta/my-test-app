import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Page from "../../../layout/Page";
import PageHeader from "../../../layout/PageHeader";
import { useForm } from "react-hook-form";
import EmailField from "../../../components/Fields/EmailField";
import TextInput from "../../../components/Fields/TextInput";
import AddForm from "../../../components/Forms/AddForm";

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
});


const UserEdit = () => {
    const { control, handleSubmit, } = useForm({ resolver: yupResolver(validationSchema), mode: "onChange" });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Page title={`Edit User - ${"Nayan Datta"}`} >

            <PageHeader title="Edit User" subTitle={"Nayan Datta"} btn={false}
                breadcrumbLinks={[
                    { label: "Manage Users", href: '/users/manage' }
                ]}
                currentPage="Edit User" />

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
            </AddForm >

        </Page >
    )
}

export default UserEdit;