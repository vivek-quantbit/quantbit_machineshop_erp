// // Copyright (c) 2024, Quantbit Technlogies Pvt Ltd and contributors
// // For license information, please see license.txt

// frappe.ui.form.on("MachineShop Processflow", {
// 	setup: function(frm) {
//         // frm.set_query("finished_item_code",function(doc, cdt, cdn) {
//         //     let d = locals[cdt][cdn];
//         //     return {
//         //         filters: [
//         //                 ['Item', 'custom_is_finished_machineshop_casting_items', '=',1],
//         //                 ['Item', 'item_group', '=', pepl_item_group],
//         //                 ["Item", company_field, '=', frm.doc.company]
//         //             ]
//         //         };
//     	// });
//         frm.set_query("raw_item",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ["Item", "Company", '=', frm.doc.company]
//                     ]
//                 };
//     	});
// 	},
// });

// var item_group="CASTING";
// var pepl_item_group="CASTING - PEPL";
// var company_field ='custom_company';

// frappe.ui.form.on('Material Cycle Time', {
// 	setup: function(frm) {
//     	frm.set_query("item",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ['Item', 'custom_is_finished_machineshop_casting_items', '=',1],
//                         ['Item', 'item_group', '=', pepl_item_group],
//                         ["Item", company_field, '=', frm.doc.company]
//                     ]
//                 };
//     	});
        
//         frm.set_query("raw_item",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ["Item", company_field, '=', frm.doc.company]
//                     ]
//                 };
//     	});
    	
//         frm.set_query("operation","machine_operation_plan",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ["Operation Master", "company", '=', frm.doc.company]
//                     ]
//                 };
//     	});
    	
//     	frm.set_query("downstream_process","row_items",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ["Downstream Processes Master", "company", '=', frm.doc.company]
//                     ]
//                 };
//     	});
    	
//     	frm.set_query("item","row_items",function(doc, cdt, cdn) {
//             let d = locals[cdt][cdn];
//             return {
//                 filters: [
//                         ["Item", company_field, '=', frm.doc.company]
//                     ]
//                 };
//     	});
    	
// 	}
// });
