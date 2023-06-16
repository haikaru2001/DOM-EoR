package com.id.domeor.view

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.id.domeor.MainActivity
import com.id.domeor.R

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_spash)
        Intent(this, MainActivity::class.java).also {
            startActivity(it)
            finish()
        }
    }
}