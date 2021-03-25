// Copyright (c) 2021, Venkatesh and contributors
// For license information, please see license.txt

frappe.ui.form.on('Delivery Chalan', {
	onload: function(frm){
		frappe.call({
			method:"textile.textile.doctype.sales_invoice.sales_invoice.sales_invoice_count",
			callback: function(res){
				// frm.set_value("sales_invoice_number", res.message[0][0]);
				frm.set_value("date", res.message[1]);
				frm.refresh_field("date");
			}
		})
	},
	customer:function(frm){
		if(frm.doc.customer){
			frappe.call({
				method:"textile.textile.doctype.delivery_chalan.delivery_chalan.customer_count",
				args:{
					'customer': frm.doc.customer
				},
				callback: function(res){
					frm.set_value("customer_ref_no", res.message[0][0]);
					frm.refresh_field("customer_ref_no");
				}
			})
		}
	},
	tax:function(frm){
		var amount = 0, total = 0;
		for (var i = 0; i<frm.doc.items.length; i++){
			amount += parseFloat(frm.doc.items[i].price) * parseFloat(frm.doc.items[i].qty);
			total += parseFloat(frm.doc.items[i].amount);
		}
		var tax_per = parseFloat(frm.doc.tax)
		var tax_value = amount * tax_per / 100;
		frm.set_value("amount", amount);
		frm.set_value("sgst", (tax_per/2).toFixed(2));
		frm.set_value("cgst", (tax_per/2).toFixed(2));
		frm.set_value("sgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("cgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("total_price", total + tax_value)
		frm.refresh_field("amount");
		frm.refresh_field("sgst");
		frm.refresh_field("cgst");
		frm.refresh_field("sgst_amount");
		frm.refresh_field("cgst_amount");
		frm.refresh_field("total_price");
	}
});

frappe.ui.form.on('Sales Invoice Item',{
	item_name:function(frm, cdt, cdn){
		var index = 0;
        for(var i=frm.doc.items.length-1; i>=0;i--){
            if(frm.doc.items[i].name == cdn){
                index = i;
                break;
            }
        }	
		if(!frm.doc.items[index].item_name){
			frm.doc.items[index].qty = 0;
			frm.doc.items[index]["unit"] = '';
			frm.doc.items[index]["price"] = '';
			frm.doc.items[index]['amount'] = '';			
			frm.refresh_field("items");
		}
		else{
			frm.doc.items[index].qty = 1;
			frm.doc.items[index].amount = (parseFloat(frm.doc.items[index].qty) * parseFloat(frm.doc.items[index].price) ).toFixed(2);
			frm.refresh_field("items");
			var amount = 0, total = 0;
			for (var i = 0; i<frm.doc.items.length; i++){
				amount += parseFloat(frm.doc.items[i].price) * parseFloat(frm.doc.items[i].qty);
				total += parseFloat(frm.doc.items[i].amount);
			}
			var tax_per = parseFloat(frm.doc.tax)
			var tax_value = amount * tax_per / 100;
			frm.set_value("amount", amount);
			frm.set_value("sgst", (tax_per/2).toFixed(2));
			frm.set_value("cgst", (tax_per/2).toFixed(2));
			frm.set_value("sgst_amount", (tax_value/2).toFixed(2));
			frm.set_value("cgst_amount", (tax_value/2).toFixed(2));
			frm.set_value("total_price", total + tax_value)
			frm.refresh_field("amount");
			frm.refresh_field("sgst");
			frm.refresh_field("cgst");
			frm.refresh_field("sgst_amount");
			frm.refresh_field("cgst_amount");
			frm.refresh_field("total_price");
		}
	},
	qty:function(frm, cdt, cdn){
		var index = 0;
        for(var i=frm.doc.items.length-1; i>=0;i--){
            if(frm.doc.items[i].name == cdn){
                index = i;
                break;
            }
        }
		if(!frm.doc.items[index].item_name){
			frm.doc.items[index].qty = '';
			frappe.throw('Enter Item name before Qty');
			frm.refresh_field("items");
		}
		frm.doc.items[index].amount = (parseFloat(frm.doc.items[index].qty) * parseFloat(frm.doc.items[index].price)).toFixed(2)
		frm.refresh_field("items");
		var amount = 0, total = 0;
		for (var i = 0; i<frm.doc.items.length; i++){
			amount += parseFloat(frm.doc.items[i].price) * parseFloat(frm.doc.items[i].qty);
			total += parseFloat(frm.doc.items[i].amount);
		}
		var tax_per = parseFloat(frm.doc.tax)
		var tax_value = amount * tax_per / 100;
		frm.set_value("amount", amount);
		frm.set_value("sgst", (tax_per/2).toFixed(2));
		frm.set_value("cgst", (tax_per/2).toFixed(2));
		frm.set_value("sgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("cgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("total_price", total + tax_value)
		frm.refresh_field("amount");
		frm.refresh_field("sgst");
		frm.refresh_field("cgst");
		frm.refresh_field("sgst_amount");
		frm.refresh_field("cgst_amount");
		frm.refresh_field("total_price");
	},
	items_remove:function(frm, cdt, cdn){
		var amount = 0, total = 0;
		for (var i = 0; i<frm.doc.items.length; i++){
			amount += parseFloat(frm.doc.items[i].price) * parseFloat(frm.doc.items[i].qty);
			total += parseFloat(frm.doc.items[i].amount);
		}
		var tax_per = parseFloat(frm.doc.tax)
		var tax_value = amount * tax_per / 100;
		frm.set_value("amount", amount);
		frm.set_value("sgst", (tax_per/2).toFixed(2));
		frm.set_value("cgst", (tax_per/2).toFixed(2));
		frm.set_value("sgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("cgst_amount", (tax_value/2).toFixed(2));
		frm.set_value("total_price", total + tax_value)
		frm.refresh_field("amount");
		frm.refresh_field("sgst");
		frm.refresh_field("cgst");
		frm.refresh_field("sgst_amount");
		frm.refresh_field("cgst_amount");
		frm.refresh_field("total_price");
	}
});
