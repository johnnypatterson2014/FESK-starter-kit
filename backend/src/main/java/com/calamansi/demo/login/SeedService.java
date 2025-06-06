package com.calamansi.demo.login;

import com.calamansi.demo.model.*;
import com.calamansi.demo.repo.*;
import jakarta.transaction.Transactional;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class SeedService {
    private static final Logger logger = LoggerFactory.getLogger(SeedService.class);
    private final RoleRepository roleRepository;
    public SeedService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    @Transactional
    public void init() {
        for (ERole role : ERole.values()) {
            if (!roleRepository.existsByErole(role)){
                roleRepository.save(new Role(role));
                logger.info("Role {} has been created.", role.name());
            } else {
                logger.info("Role {} already exists.", role.name());
            }
        }
    }
}
