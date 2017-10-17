package com.tns.gen.com.couchbase.lite;

public class Mapper implements com.couchbase.lite.Mapper {
	public Mapper() {
		com.tns.Runtime.initInstance(this);
	}

	public void map(java.util.Map param_0, com.couchbase.lite.Emitter param_1)  {
		java.lang.Object[] args = new java.lang.Object[2];
		args[0] = param_0;
		args[1] = param_1;
		com.tns.Runtime.callJSMethod(this, "map", void.class, args);
	}

}
