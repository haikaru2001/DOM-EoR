package com.id.domeor.model.data

import com.id.domeor.model.model.SignInUser
import com.id.domeor.model.model.SignUpUser

interface DataSource {
    suspend fun signIn(user: SignInUser): Response
    suspend fun signUp(user: SignUpUser): Response
    suspend fun isLogin(): Boolean
}

sealed class Response{
    data class IsError(var error: Boolean, var message: String): Response()
}