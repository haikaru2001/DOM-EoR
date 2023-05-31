package com.id.domeor.viewmodel

import androidx.lifecycle.ViewModel
import androidx.lifecycle.ViewModelProvider
import com.google.firebase.auth.FirebaseAuth
import com.id.domeor.model.data.RemoteDataSource
import com.id.domeor.model.data.Repository
import com.id.domeor.viewmodel.auth.LoginViewModel
import com.id.domeor.viewmodel.auth.RegisterViewModel

private lateinit var auth: FirebaseAuth
object ViewModelFactory : ViewModelProvider.Factory {
    private val repository: Repository = Repository(
        remoteDataSource = RemoteDataSource(auth),
    )
    override fun <T : ViewModel> create(modelClass: Class<T>): T {
        if (modelClass.isAssignableFrom(LoginViewModel::class.java)) {
            @Suppress("UNCHECKED_CAST")
            return LoginViewModel(repository) as T
        }
        if (modelClass.isAssignableFrom(RegisterViewModel::class.java)) {
            @Suppress("UNCHECKED_CAST")
            return RegisterViewModel(repository) as T
        }
        throw IllegalArgumentException("Unknown ViewModel class: ${modelClass.simpleName}")
    }
}
