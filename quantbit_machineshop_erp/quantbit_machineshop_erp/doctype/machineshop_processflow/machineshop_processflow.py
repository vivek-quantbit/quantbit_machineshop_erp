# Copyright (c) 2024, Quantbit Technlogies Pvt Ltd and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class MachineShopProcessflow(Document):
	def validate(self):
		self.check_enabled_item()
  
	def check_enabled_item(self):
		if self.is_enable and frappe.db.exists("MachineShop Processflow",{"finished_item_code":self.finished_item_code,"is_enable":1,"name":["!=",self.name]}):
			frappe.throw(f"Multiple Finished Item <b>{self.finished_item_code}</b> cannot be enabled at once")
