package com.tns.gen.com.telerik.localnotifications;

public class LocalNotificationsPluginListener implements com.telerik.localnotifications.LocalNotificationsPluginListener {
	public LocalNotificationsPluginListener() {
		com.tns.Runtime.initInstance(this);
	}

	public void success(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "success", void.class, args);
	}

	public void error(java.lang.Object param_0)  {
		java.lang.Object[] args = new java.lang.Object[1];
		args[0] = param_0;
		com.tns.Runtime.callJSMethod(this, "error", void.class, args);
	}

}
