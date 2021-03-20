# -*- coding: utf-8 -*-
# Copyright (c) 2021, Venkatesh and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.model.document import Document

@frappe.whitelist()
def get_date():
	return frappe.utils.today()

class Expenses(Document):
	pass
