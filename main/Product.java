package com.Example.main;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="product1234")
public class Product {
	@Id
	private Integer id;
	private String name;
	private Integer price;
	private String color;
	private String description;
	private String url;
	private Integer pquanity;
	
	
	public Product() {
		// TODO Auto-generated constructor stub
	}

	public Product(Integer id,String name, Integer price, String color, String description, String url,Integer pquanity) {
		super();
		this.id=id;
		this.name = name;
		this.price = price;
		this.color = color;
		this.description = description;
		this.url = url;
		this.pquanity=pquanity;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}
	
	
	public Integer getPquanity() {
		return pquanity;
	}

	public void setPquanity(Integer pquanity) {
		this.pquanity = pquanity;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Product other = (Product) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", name=" + name + ", price=" + price + ", color=" + color + ", description="
				+ description + ", url=" + url + ", pquanity"+pquanity+ "]";
	}


}
