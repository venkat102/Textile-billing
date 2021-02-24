# -*- coding: utf-8 -*-
# Copyright (c) 2021, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

@frappe.whitelist()
def sales_invoice_count():
	return [frappe.db.sql('''SELECT COUNT(name)+1 FROM `tabSales Invoice`'''), frappe.utils.today()]

@frappe.whitelist()
def customer_count(customer):
	return frappe.db.sql(f'''SELECT COUNT(name)+1 FROM `tabSales Invoice` WHERE customer=\'{customer}\' ''')

class SalesInvoice(Document):
	pass
