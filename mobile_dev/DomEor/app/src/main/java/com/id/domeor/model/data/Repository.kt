package com.id.domeor.model.data

import com.id.domeor.model.model.SignInUser
import com.id.domeor.model.model.SignUpUser

class Repository(
    private val remoteDataSource: RemoteDataSource
) {
    suspend fun signIn(user: SignInUser): Response {
        return remoteDataSource.signIn(user)
    }

    suspend fun signUp(user: SignUpUser): Response {
        return remoteDataSource.signUp(user)
    }

    suspend fun getLoginStatus(): Boolean {
        return remoteDataSource.isLogin()
    }
}