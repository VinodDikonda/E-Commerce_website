package com.Example.main;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Myform {

	@Autowired
	loginRepo repo;
	
	@Autowired
	ProductRepo prepo;
	
	@GetMapping("/loginget")
	public List<LoginFrom> getAll(){
		return repo.findAll();
	}
	
	@PostMapping("/loginpost")
	public LoginFrom addlogin(@RequestBody LoginFrom e) {
		return repo.save(e);
	}
	@PostMapping("/check")
	public ResponseEntity<?> loginUser(@RequestBody LoginFrom logindata){
		LoginFrom login=repo.findByusername(logindata.getUsername());
		if(login.getPassword().equals(logindata.getPassword()))
			return ResponseEntity.ok(login);
		
		return (ResponseEntity<?>) ResponseEntity.internalServerError();
	}
	@PostMapping("/Productpost")
	public Product addproduct(@RequestBody Product p) {
		System.out.println(p);
		return prepo.save(p);
	}
	@GetMapping("/Productget")
	public List<Product>getAllproduct(){
		return prepo.findAll();
	}
	@DeleteMapping("/Productdelete")
	public void delete(@RequestParam Integer id) {
		prepo.deleteById(id);
	}
	@PutMapping("/Productupdate")
	public Product updatemp(@RequestBody Product product) {
		Integer id = product.getId();//to get a id 
		Product em=prepo.findById(id).get();//to find empid
		em.setId(product.getId());
		em.setName(product.getName());
		em.setColor(product.getColor());
		em.setPrice(product.getPrice());
		em.setDescription(product.getDescription());
		em.setUrl(product.getUrl());
		return prepo.save(em);
	}
	
	
	@GetMapping("/Product/{id}")
	public Product getone(@PathVariable Integer id) {
		Optional<Product> o=prepo.findById(id);
		return o.get();
	}


}
