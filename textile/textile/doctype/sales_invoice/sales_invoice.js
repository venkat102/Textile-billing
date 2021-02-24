// Copyright (c) 2021, Venkatesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Invoice', {
	onload: function(frm){
		frappe.call({
			method:"textile.textile.doctype.sales_invoice.sales_invoice.sales_invoice_count",
			callback: function(res){
				frm.set_value("sales_invoice_number", res.message[0][0]);
				frm.set_value("date", res.message[1]);
				frm.refresh();
			}
		})
	},
	customer:function(frm){
		if(frm.doc.customer){
			frappe.call({
				method:"textile.textile.doctype.sales_invoice.sales_invoice.customer_count",
				args:{
					'customer': frm.doc.customer
				},
				callback: function(res){
					frm.set_value("customer_invoice_number", res.message[0][0]);
					frm.refresh();
				}
			})
		}
	}
});
