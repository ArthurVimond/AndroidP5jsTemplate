package fr.arthurvimond.templatep5js;

import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.webkit.WebView;

/**
 * Created by Arthur Vimond on 06/09/2016.
 */
public class MainActivity extends AppCompatActivity {

    private static final String TAG = "MainActivity";

    WebView webView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Get WebView reference from xml layout
        webView = (WebView) findViewById(R.id.webView);

        // Enable Javascript
        webView.getSettings().setJavaScriptEnabled(true);

        // Add Javascript interface (to call Java functions from Javascript)
        JsInterface jsInterface = new JsInterface(this);
        webView.addJavascriptInterface(jsInterface, "Android");

        // Load index.html into WebView
        webView.loadUrl("file:///android_asset/index.html");

    }

    // Called by "Change background color" button
    public void onButtonClick(View view) {
        // Call Javascript function (in sketch.js)
        webView.loadUrl("javascript:changeBackgroundColor()");
    }

    public int getScreenWidth() {
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        return metrics.widthPixels;
    }

    public int getScreenHeight() {
        DisplayMetrics metrics = new DisplayMetrics();
        getWindowManager().getDefaultDisplay().getMetrics(metrics);
        return metrics.heightPixels;
    }

}