package com.yilmazmertm.pocapp.controller;

import com.yilmazmertm.pocapp.model.Customer;
import com.yilmazmertm.pocapp.repository.CustomerRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class CustomerController {

    public CustomerController(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }
    private final CustomerRepository customerRepository;

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer customer) {
        return customerRepository.save(customer);
    }

    @GetMapping("/customers")
    public ResponseEntity<List<Customer>> getAllCustomers(){
        return ResponseEntity.ok(customerRepository.findAll());
    }

    @GetMapping("/customers/{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable(value = "id") Integer customerId) throws Exception{
        Customer customer = customerRepository.findById(customerId).orElseThrow();
        return ResponseEntity.ok().body(customer);
    }

    @PutMapping("/customers/{id}")
    public ResponseEntity<Customer> updateCustomer(@PathVariable(value = "id") Integer customerId, @RequestBody Customer customerDetail) throws Exception {
        Customer customer = customerRepository.findById(customerId).orElseThrow();

        customer.setFirstName(customerDetail.getFirstName());
        customer.setLastName(customerDetail.getLastName());
        customer.setCity(customerDetail.getCity());
        customer.setDistrict(customerDetail.getDistrict());
        customer.setIdNumber(customerDetail.getIdNumber());
        customer.setEmail(customerDetail.getEmail());
        customer.setPhone(customerDetail.getPhone());

        Customer newEmployee = customerRepository.save(customer);
        return ResponseEntity.ok(newEmployee);
    }

    @DeleteMapping("/customers/{id}")
    public void deleteCustomer(@PathVariable(value = "id") Integer customerId) {
        Customer customer = customerRepository.findById(customerId).orElseThrow();
        customerRepository.delete(customer);
    }
}
