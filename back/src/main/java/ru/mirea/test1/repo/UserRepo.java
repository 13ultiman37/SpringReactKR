package ru.mirea.test1.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.mirea.test1.domain.User;

import java.util.List;

public interface UserRepo extends JpaRepository<User, Long> {
    List <User> findAll();
}
