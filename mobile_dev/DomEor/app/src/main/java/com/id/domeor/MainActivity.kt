package com.id.domeor

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.id.domeor.databinding.MainActivityBinding

private lateinit var binding: MainActivityBinding

class MainActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        binding = MainActivityBinding.inflate(layoutInflater)
        val view = binding.root
        setContentView(view)
    }
}