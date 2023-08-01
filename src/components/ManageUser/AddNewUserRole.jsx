import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider,
    FormControl,
    FormControlLabel,
    FormHelperText,
    Slide,
    Switch,
    Typography,
} from "@mui/material";
import {forwardRef, useRef} from "react";
import {Controller, useForm} from "react-hook-form";
import {red} from "@mui/material/colors";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import * as Yup from "yup";
import ReactSelect from "react-select";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction={"down"} ref={ref} {...props} />;
});

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    role: Yup.string().required('Role is required'),
});

const employees = [
    {value: "1", label: "Employee 1"},
    {value: "2", label: "Employee 2"},
    {value: "3", label: "Employee 3"},
    {value: "4", label: "Employee 4"},
    {value: "5", label: "Employee 5"}
];

export default function AddNewUserRole({open, handleClose}) {
    //react-hook-form
    const {
        control,
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema),
        mode: "onChange"
    });
    const onSubmit = (data) => console.log(data);

    const modalRef = useRef(null)

    return (
        <Dialog
            ref={modalRef}
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>{"Add User Role"}</DialogTitle>
            <Divider/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <DialogContent sx={{minWidth: 400}}>
                    <Controller
                        render={({ field, formState }) => (
                            <FormControl fullWidth>
                                <Typography
                                    color={!!formState.errors?.name ? red[700] : ""}
                                >
                                    Name*
                                </Typography>
                                <ReactSelect
                                    menuPortalTarget={modalRef.current}
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            border: !!formState.errors?.name
                                                ? "1px solid #D32F2F"
                                                : "1px solid #C4C4C4",
                                            "&:hover": {
                                                border: !!formState.errors?.name
                                                    ? "1px solid #D32F2F"
                                                    : "1px solid #C4C4C4",
                                            },
                                        }),
                                    }}
                                    isSearchable={true}
                                    name="name"
                                    options={employees}
                                    value={
                                        field?.value !== ""
                                            ? employees?.filter(
                                                (employee) => employee?.value === field?.value
                                            )[0]
                                            : null
                                    }
                                    onChange={(selectedOption) =>
                                        field.onChange(selectedOption?.value)
                                    }
                                />
                                {!!formState.errors?.name ? (
                                    <FormHelperText error>
                                        {errors?.name?.message}
                                    </FormHelperText>
                                ) : (
                                    ""
                                )}
                            </FormControl>
                        )}
                        name="name"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({ field, formState }) => (
                            <FormControl fullWidth sx={{mt: 2}}>
                                <Typography
                                    color={!!formState.errors?.role ? red[700] : ""}
                                >
                                    Role*
                                </Typography>
                                <ReactSelect
                                    menuPortalTarget={modalRef.current}
                                    styles={{
                                        control: (base) => ({
                                            ...base,
                                            border: !!formState.errors?.role
                                                ? "1px solid #D32F2F"
                                                : "1px solid #C4C4C4",
                                            "&:hover": {
                                                border: !!formState.errors?.role
                                                    ? "1px solid #D32F2F"
                                                    : "1px solid #C4C4C4",
                                            },
                                        }),
                                    }}
                                    isSearchable={true}
                                    options={employees}
                                    value={
                                        field?.value !== ""
                                            ? employees?.filter(
                                                (employee) => employee?.value === field?.value
                                            )[0]
                                            : null
                                    }
                                    onChange={(selectedOption) =>
                                        field.onChange(selectedOption?.value)
                                    }
                                />
                                {!!formState.errors?.role ? (
                                    <FormHelperText error>
                                        {errors?.role?.message}
                                    </FormHelperText>
                                ) : (
                                    ""
                                )}
                            </FormControl>
                        )}
                        name="role"
                        control={control}
                        defaultValue=""
                    />
                    <Controller
                        render={({field, formState}) => (
                            <FormControl size="small" sx={{mt: 2}}>
                                <FormControlLabel
                                    sx={{ml: 0}}
                                    value="status"
                                    control={<Switch size={"small"} color="primary" defaultChecked/>}
                                    label="Status"
                                    labelPlacement="start"
                                />
                                {!!formState.errors?.status ?
                                    <FormHelperText
                                        error>{errors?.status?.message}</FormHelperText> : ""}
                            </FormControl>
                        )}
                        name="status"
                        control={control}
                        defaultValue=""
                    />
                </DialogContent>
                <Divider/>
                <DialogActions>
                    <Button variant={"contained"} size={"small"} color={"error"} onClick={handleClose}>Cancel</Button>
                    <Button variant={"contained"} size={"small"} color={"success"} type={"submit"}>Add</Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}