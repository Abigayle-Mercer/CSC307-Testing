import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";




const Login = () => {
   const router = useRouter();
    const [isSignUp, setSignUp] = useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleLogin = async () => {
      router.push("/profile");
    }
    const handleSignUp = async () => {}

    const renderSignUpForm = () => (
      <View style={styles.container}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.label}>name</Text>
        <TextInput
          style={styles.input}
          placeholder="name"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setName(text)}
          value={name}
        />
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <Text style={styles.label}>email</Text>
        <TextInput
          style={styles.input}
          placeholder="email"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setEmail(text)}
          value={email}
          secureTextEntry
        />
        <Text style={styles.label}>phone number</Text>
        <TextInput
          style={styles.input}
          placeholder="phone"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setPhone(text)}
          value={phone}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSignUp(false)}>
          <Text style={styles.toggleText}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    );
    const renderLoginForm = () => (
      <View style={styles.container}>
        <Text style={styles.title}>User Login</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="lightgrey"
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setSignUp(true)}>
          <Text style={styles.toggleText}>Dont have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    );

   
return isSignUp ? renderSignUpForm() : renderLoginForm();
    
};
export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  label: {
    color: "grey",
    alignSelf: "flex-start",
    marginLeft: 40,
    marginBottom: 4,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: "blue",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  toggleText: {
    marginTop: 15,
    color: "blue",
  },
});
