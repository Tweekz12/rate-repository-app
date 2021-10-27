import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import { Formik } from 'formik';
import * as yup from 'yup';

const styles=StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white'
    },
});

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required('Username is required'),
    password: yup
        .string()
        .required('Password is required')
});

const SinginForm = ({ onSubmit }) => (
    <View>
        <FormikTextInput name='username' placeholder='Username' style={{ padding: 10, borderColor: 'grey', borderWidth: 1, borderRadius: 5 }}/>
        <FormikTextInput name='password' placeholder='Password' secureTextEntry style={{ padding: 10, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginTop: 15 }}/>
        <Pressable onPress={onSubmit}>
            <Text style={{ color: 'white', backgroundColor: theme.colors.primary, padding: 15, borderRadius: 5, textAlign: 'center', marginTop: 15 }}>Sign in</Text>
        </Pressable>
    </View>
);

const SignIn = () => {
    const onSubmit = (values) => {
        console.log(values);
    }

    const initialValues = {
        username: '',
        password: ''
    }

    return (
        <View style={styles.container}>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {({ handleSubmit }) => <SinginForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;