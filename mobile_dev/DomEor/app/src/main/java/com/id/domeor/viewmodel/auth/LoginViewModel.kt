package com.id.domeor.viewmodel.auth

import android.util.Log
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import com.id.domeor.model.data.Repository
import com.id.domeor.model.model.SignInUser
import kotlinx.coroutines.launch

class LoginViewModel(private val repository: Repository) : ViewModel() {


    fun login(email: String, password: String){
        viewModelScope.launch {
            Log.d("Hasil", repository.signIn(user =
            (SignInUser(email, password))).toString())
        }
    }
}