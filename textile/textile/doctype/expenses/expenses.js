// Copyright (c) 2021, Venkatesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Expenses', {
	refresh: function(frm) {
		frappe.call({
			method: 'textile.textile.doctype.expenses.expenses.get_date',
			callback: function(res){
				if(res.message){
					frm.set_value("date", res.message)
				}
			}
		})
	}
});
