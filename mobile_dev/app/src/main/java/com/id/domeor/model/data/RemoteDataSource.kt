package com.id.domeor.model.data

import com.google.firebase.auth.FirebaseAuth
import com.id.domeor.model.data.Response.IsError
import com.id.domeor.model.model.SignInUser
import com.id.domeor.model.model.SignUpUser


class RemoteDataSource(private val auth: FirebaseAuth): DataSource {
    override suspend fun signIn(user: SignInUser): Response {
        val isError = IsError(false, "")
        auth.signInWithEmailAndPassword(
            user.email, user.password).addOnCompleteListener {
                if (it.isSuccessful){
                    isError.error = false
                    isError.message = ""
                } else {
                    isError.error = true
                    isError.message = it.exception.toString()
                }
        }
        return isError
    }

    override suspend fun signUp(user: SignUpUser): Response {
        val isError = IsError(false, "")
        auth.createUserWithEmailAndPassword(
            user.email, user.password).addOnCompleteListener {
            if (it.isSuccessful){
                isError.error = false
                isError.message = ""
            } else {
                isError.error = true
                isError.message = it.exception.toString()
            }
        }
        return isError
    }

    override suspend fun isLogin(): Boolean {
        return auth.currentUser != null
    }
}