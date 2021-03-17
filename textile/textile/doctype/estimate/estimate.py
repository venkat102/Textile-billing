# -*- coding: utf-8 -*-
# Copyright (c) 2021, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document
from datetime import datetime

@frappe.whitelist()
def customer_count(customer):
	return frappe.db.sql(f'''SELECT COUNT(name)+1 FROM `tabEstimate` WHERE customer=\'{customer}\' ''')

@frappe.whitelist()
def estimate_count():
	return datetime.today().date()


class Estimate(Document):
	pass
