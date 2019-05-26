package com.example.reactdemo.domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@NoArgsConstructor
public class Company {
    private String name;
    @Id
    private String tickerSymbol;

    public Company(String name, String tickerSymbol) {
        this.name = name;
        this.tickerSymbol = tickerSymbol;
    }
}
