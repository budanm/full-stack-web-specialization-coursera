package com.tns.gen.android.media;

public class MediaScannerConnection_OnScanCompletedListener implements android.media.MediaScannerConnection.OnScanCompletedListener {
	public MediaScannerConnection_OnScanCompletedListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void onScanCompleted(java.lang.String param_0, android.net.Uri param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "onScanCompleted", void.class, args);
	}

}
