package com.shawshank.wjback.service;

import com.shawshank.wjback.pojo.Category;
import com.shawshank.wjback.dao.CategoryDAO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Sort;

import java.util.List;

@Service
public class CategoryService {
    @Autowired
    CategoryDAO categoryDAO;

    public List<Category> list () {
        Sort sort = Sort.by(Sort.Direction.DESC, "id");
        return  categoryDAO.findAll(sort);
    }

    public Category get(int id) {
        Category c = categoryDAO.findById(id).orElse(null);
        return c;
    }
    
}