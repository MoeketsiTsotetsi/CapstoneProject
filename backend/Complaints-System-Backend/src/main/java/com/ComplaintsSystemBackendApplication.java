package com;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com")
@EntityScan(basePackages = "com.entity")
@EnableJpaRepositories(basePackages = "com.repository")
public class ComplaintsSystemBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(ComplaintsSystemBackendApplication.class, args);
		System.out.println("Server running on 8080");
	}

}
