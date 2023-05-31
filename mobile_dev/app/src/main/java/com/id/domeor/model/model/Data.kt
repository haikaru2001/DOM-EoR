package com.id.domeor.model.model

data class SignInUser(
    val email: String,
    val password: String
)
data class SignUpUser(
    val name: String,
    val email: String,
    val password: String
)