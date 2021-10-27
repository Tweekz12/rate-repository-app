import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import FormikTextInput from './FormikTextInput';
import Text from './Text';
import theme from '../theme';
import { Formik, useField } from 'formik';

const styles=StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: 'white'
    },
});

const SinginForm = ({ onSubmit }) => (
    <View>
        <FormikTextInput name='username' placeholder='Username' style={{ padding: 10, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginBottom: 15 }}/>
        <FormikTextInput name='password' placeholder='Password' secureTextEntry style={{ padding: 10, borderColor: 'grey', borderWidth: 1, borderRadius: 5, marginBottom: 15 }}/>
        <Pressable onPress={onSubmit}>
            <Text style={{ color: 'white', backgroundColor: theme.colors.primary, padding: 15, borderRadius: 5, textAlign: 'center', marginBottom: 15 }}>Sign in</Text>
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
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
                {({ handleSubmit }) => <SinginForm onSubmit={handleSubmit} />}
            </Formik>
        </View>
    );
};

export default SignIn;