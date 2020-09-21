const { Router } = require("express");
const router = Router();
const employeeCtrl = require("../controllers/employee.controller");
//CRUD

router.get("/", employeeCtrl.getEmployees);
router.get("/:id", employeeCtrl.getEmployee);
router.post("/", employeeCtrl.createEmployees);
router.put("/:id", employeeCtrl.updateEmployees);
router.delete("/:id", employeeCtrl.deleteEmployees);

module.exports = router;
