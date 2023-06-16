package com.id.domeor.view.auth

import android.os.Bundle
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import androidx.fragment.app.Fragment
import androidx.lifecycle.ViewModelProvider
import androidx.navigation.NavController
import androidx.navigation.fragment.findNavController
import com.id.domeor.R
import com.id.domeor.databinding.FragmentLoginBinding
import com.id.domeor.databinding.FragmentRegisterBinding
import com.id.domeor.viewmodel.ViewModelFactory
import com.id.domeor.viewmodel.auth.RegisterViewModel

class RegisterFragment : Fragment() {
    private lateinit var viewModel: RegisterViewModel
    private var _binding: FragmentRegisterBinding? = null
    private val binding get() = _binding!!
    private lateinit var navController: NavController


    override fun onCreateView(
        inflater: LayoutInflater, container: ViewGroup?,
        savedInstanceState: Bundle?
    ): View {
        _binding = FragmentRegisterBinding.inflate(inflater, container, false)
        val view = binding.root
        navController = this.findNavController()
        binding.loginRegisterText.setOnClickListener {
            navController.navigate(R.id.action_registerFragment_to_loginFragment)
        }
        return (view)
    }

    override fun onActivityCreated(savedInstanceState: Bundle?) {
        super.onActivityCreated(savedInstanceState)
        viewModel = ViewModelProvider(this, ViewModelFactory)[RegisterViewModel::class.java]
    }

}