# -*- coding: utf-8 -*-
# Copyright (c) 2021, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

@frappe.whitelist()
def customer_count(customer):
	return frappe.db.sql(f'''SELECT COUNT(name)+1 FROM `tabSales Order` WHERE customer=\'{customer}\' ''')

class SalesOrder(Document):
	pass
