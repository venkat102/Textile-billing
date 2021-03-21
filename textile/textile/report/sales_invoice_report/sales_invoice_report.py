# Copyright (c) 2013, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from datetime import datetime

def execute(filters=None):
	columns, data = [], []
	columns = [
		{
			"fieldname": "date",
			"fieldtype": "Date",
			"label": "Date"
		},
		{
			"fieldname": "sales_invoice",
			"fieldtype": "Link",
			"label": "Sales Invoice",
			"options": "Sales Invoice",
			"width": 150
		},
  		{
			"fieldname": "customer",
			"fieldtype": "Link",
			"label": "Customer",
			"options": "Customer",
			"width": 100
		},
		{
			"fieldname": "Amount",
			"fieldtype": "Currency",
			"label": "Amount"
		},
		{
			"fieldname": "tax",
			"fieldtype": "Data",
			"label": "Tax"
		},
		{
			"fieldname": "total_price",
			"fieldtype": "Currency",
			"label": "Total Price"
		},
		{
			"fieldname": "payment_method",
			"fieldtype": "Data",
			"label": "Payment Method"
		},
		{
			"fieldname": "transport",
			"fieldtype": "Data",
			"label": "Transport"
		}
	]
	if filters.from_date and filters.to_date:
		data = get_data(filters)
	return columns, data

def get_data(filters):
	to_date = datetime.strptime(filters.to_date, "%Y-%m-%d")
	from_date = datetime.strptime(filters.from_date, "%Y-%m-%d")
	is_return = filters.is_return
	if not is_return:
		return frappe.db.sql('''select date, name, customer, amount, tax, total_price, payment_method, transport from `tabSales Invoice` where date>=%s and date<=%s order by date''',(from_date, to_date))
	else:
		return frappe.db.sql('''select date, name, customer, amount, tax, total_price, payment_method, transport from `tabSales Invoice` where date>=%s and date<=%s and is_return=1 order by date''',(from_date, to_date))