# -*- coding: utf-8 -*-
# Copyright (c) 2021, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

@frappe.whitelist()
def get_data(invoice):
	return [frappe.db.get_value("Purchase Invoice", {'name':invoice}, ["company_name", 'mode_of_payment', "tax", "sgst", "cgst", "sgst_amount", "cgst_amount", 'amount', 'total_price',]), frappe.db.get_list("Sales Invoice Item", {'parent':invoice}, ['item_name', 'qty', 'unit', 'price', 'amount'])]

@frappe.whitelist()
def check_returned(invoice):
	return frappe.db.exists("Purchase Invoice", invoice+'-Returned')

class PurchaseInvoice(Document):
	def autoname(self):
		if self.purchase_invoice:
			self.name = self.purchase_invoice+"-Returned"
