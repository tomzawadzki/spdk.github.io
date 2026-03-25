var user_guides =
[
    [ "System Configuration User Guide", "system_configuration.html", [
      [ "IOMMU configuration", "system_configuration.html#iommu_config", null ],
      [ "Running SPDK as non-privileged user", "system_configuration.html#system_configuration_nonroot", [
        [ "Hugetlbfs access", "system_configuration.html#autotoc_md1350", null ],
        [ "Device access", "system_configuration.html#system_configuration_nonroot_device_access", null ],
        [ "Memory constraints", "system_configuration.html#system_configuration_nonroot_memory_constraints", [
          [ "Increasing the memlock limit permanently", "system_configuration.html#autotoc_md1351", null ],
          [ "Increasing the memlock for a specific process", "system_configuration.html#autotoc_md1352", null ]
        ] ]
      ] ]
    ] ],
    [ "SPDK Libraries", "libraries.html", [
      [ "Directory Structure", "libraries.html#structure", [
        [ "lib", "libraries.html#lib", null ],
        [ "module", "libraries.html#module", null ]
      ] ],
      [ "Library Conventions", "libraries.html#conventions", [
        [ "Headers", "libraries.html#headers", null ],
        [ "Naming Conventions", "libraries.html#naming", null ],
        [ "Map Files", "libraries.html#map", null ]
      ] ],
      [ "SPDK Shared Objects", "libraries.html#shared_objects", [
        [ "Shared Object Versioning", "libraries.html#versioning", null ],
        [ "Linking to Shared Objects", "libraries.html#so_linking", null ],
        [ "Replacing the env abstraction", "libraries.html#env_replacement", null ]
      ] ],
      [ "SPDK Static Objects", "libraries.html#static_objects", null ]
    ] ],
    [ "Linking SPDK applications with pkg-config", "pkgconfig.html", null ],
    [ "An Overview of SPDK Applications", "app_overview.html", [
      [ "Configuring SPDK Applications", "app_overview.html#app_config", [
        [ "Command Line Parameters", "app_overview.html#app_cmd_line_args", [
          [ "Configuration file", "app_overview.html#cmd_arg_config_file", null ],
          [ "Limit coredump", "app_overview.html#cmd_arg_limit_coredump", null ],
          [ "Tracepoint group mask", "app_overview.html#cmd_arg_limit_tpoint_group_mask", null ],
          [ "Deferred initialization", "app_overview.html#cmd_arg_deferred_initialization", null ],
          [ "Create just one hugetlbfs file", "app_overview.html#cmd_arg_single_file_segments", null ],
          [ "Multi process mode", "app_overview.html#cmd_arg_multi_process", null ],
          [ "Memory size", "app_overview.html#cmd_arg_memory_size", null ],
          [ "Disable PCI access", "app_overview.html#cmd_arg_disable_pci_access", null ],
          [ "PCI address blocked and allowed lists", "app_overview.html#cmd_arg_pci_blocked_allowed", null ],
          [ "Unlink hugepage files after initialization", "app_overview.html#cmd_arg_huge_unlink", null ],
          [ "Log flag", "app_overview.html#cmd_arg_log_flags", null ]
        ] ],
        [ "CPU mask", "app_overview.html#cpu_mask", [
          [ "Example", "app_overview.html#autotoc_md1281", null ]
        ] ]
      ] ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", null ],
      [ "Prerequisites", "iscsi.html#iscsi_prereqs", null ],
      [ "Introduction", "iscsi.html#autotoc_md1291", [
        [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ]
      ] ],
      [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", [
        [ "Portal groups", "iscsi.html#autotoc_md1292", null ],
        [ "Initiator groups", "iscsi.html#autotoc_md1293", null ],
        [ "Target nodes", "iscsi.html#autotoc_md1294", null ]
      ] ],
      [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", [
        [ "Setup", "iscsi.html#autotoc_md1295", null ],
        [ "Discovery", "iscsi.html#autotoc_md1296", null ],
        [ "Connect to target", "iscsi.html#autotoc_md1297", null ],
        [ "Disconnect from target", "iscsi.html#autotoc_md1298", null ],
        [ "Deleting target node cache", "iscsi.html#autotoc_md1299", null ],
        [ "Finding /dev/sdX nodes for iSCSI LUNs", "iscsi.html#autotoc_md1300", null ],
        [ "Tuning", "iscsi.html#autotoc_md1301", null ],
        [ "Example: Configure simple iSCSI Target with one portal and two LUNs", "iscsi.html#autotoc_md1302", [
          [ "Configure iSCSI Target", "iscsi.html#autotoc_md1303", null ],
          [ "Configure initiator", "iscsi.html#autotoc_md1304", null ]
        ] ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", null ],
      [ "iSCSI Login Redirection", "iscsi.html#iscsi_login_redirection", null ]
    ] ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", null ],
      [ "RDMA transport support", "nvmf.html#nvmf_rdma_transport", [
        [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
        [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
        [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
        [ "Finding RDMA NICs and associated network interfaces", "nvmf.html#autotoc_md1319", [
          [ "Mellanox ConnectX-3 RDMA NICs", "nvmf.html#autotoc_md1320", null ],
          [ "Mellanox ConnectX-4 RDMA NICs", "nvmf.html#autotoc_md1321", null ],
          [ "Assigning IP addresses to RDMA NICs", "nvmf.html#autotoc_md1322", null ]
        ] ],
        [ "RDMA Limitations", "nvmf.html#nvmf_rdma_limitations", null ]
      ] ],
      [ "TCP transport support", "nvmf.html#nvmf_tcp_transport", null ],
      [ "FC transport support", "nvmf.html#nvmf_fc_transport", [
        [ "Broadcom FC LLD code", "nvmf.html#autotoc_md1323", null ],
        [ "Fetch FC LLD module and then build SPDK with FC enabled", "nvmf.html#autotoc_md1324", null ]
      ] ],
      [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", [
        [ "Using RPCs", "nvmf.html#nvmf_config_rpc", null ],
        [ "NQN Formal Definition", "nvmf.html#autotoc_md1325", [
          [ "NQN Comparisons", "nvmf.html#autotoc_md1326", null ]
        ] ],
        [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
      ] ],
      [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
      [ "Enabling NVMe-oF target tracepoints for offline analysis and debug", "nvmf.html#nvmf_trace", null ],
      [ "Enabling NVMe-oF Multipath", "nvmf.html#autotoc_md1327", null ],
      [ "Enabling NVMe-oF TLS", "nvmf.html#autotoc_md1328", [
        [ "Target setup", "nvmf.html#autotoc_md1329", null ],
        [ "Initiator setup", "nvmf.html#autotoc_md1330", null ]
      ] ],
      [ "NVMe-oF in-band authentication", "nvmf.html#autotoc_md1331", null ],
      [ "NVMe Subsystem Reset (NSSR)", "nvmf.html#autotoc_md1332", null ],
      [ "NVMe firmware update", "nvmf.html#autotoc_md1333", null ]
    ] ],
    [ "vhost Target", "vhost.html", [
      [ "Table of Contents", "vhost.html#vhost_toc", null ],
      [ "Introduction", "vhost.html#vhost_intro", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", [
        [ "Vhost Command Line Parameters", "vhost.html#vhost_cmd_line_args", null ],
        [ "Supported Guest Operating Systems", "vhost.html#autotoc_md1368", null ],
        [ "QEMU", "vhost.html#autotoc_md1369", null ]
      ] ],
      [ "Starting SPDK vhost target", "vhost.html#vhost_start", null ],
      [ "SPDK Configuration", "vhost.html#vhost_config", [
        [ "Create bdev (block device)", "vhost.html#vhost_bdev_create", null ],
        [ "Create a vhost device", "vhost.html#vhost_vdev_create", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md1370", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md1371", null ]
        ] ],
        [ "QEMU", "vhost.html#vhost_qemu_config", [
          [ "Vhost-SCSI", "vhost.html#autotoc_md1372", null ],
          [ "Vhost-BLK", "vhost.html#autotoc_md1373", null ]
        ] ],
        [ "Example output", "vhost.html#vhost_example", null ]
      ] ],
      [ "Advanced Topics", "vhost.html#vhost_advanced_topics", [
        [ "Multi-Queue Block Layer (blk-mq)", "vhost.html#vhost_multiqueue", null ],
        [ "Hot-attach/hot-detach", "vhost.html#vhost_hotattach", [
          [ "Hot-attach", "vhost.html#autotoc_md1374", null ],
          [ "Hot-detach", "vhost.html#autotoc_md1375", null ]
        ] ]
      ] ],
      [ "Known bugs and limitations", "vhost.html#vhost_bugs", [
        [ "Windows virtio-blk driver before version 0.1.130-1 only works with 512-byte sectors", "vhost.html#autotoc_md1376", null ],
        [ "QEMU vhost-user-blk", "vhost.html#autotoc_md1377", null ]
      ] ]
    ] ],
    [ "Block Device User Guide", "bdev.html", [
      [ "Target Audience", "bdev.html#bdev_ug_targetaudience", null ],
      [ "Introduction", "bdev.html#bdev_ug_introduction", null ],
      [ "Prerequisites", "bdev.html#bdev_ug_prerequisites", null ],
      [ "Configuring Block Device Modules", "bdev.html#bdev_ug_general_rpcs", null ],
      [ "Common Block Device Configuration Examples", "bdev.html#autotoc_md1282", null ],
      [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
      [ "Crypto Virtual Bdev Module", "bdev.html#bdev_config_crypto", [
        [ "dpdk_cryptodev accel module", "bdev.html#autotoc_md1283", null ],
        [ "SW accel module", "bdev.html#autotoc_md1284", null ],
        [ "General workflow", "bdev.html#autotoc_md1285", [
          [ "Example", "bdev.html#autotoc_md1286", null ]
        ] ],
        [ "Crypto key format", "bdev.html#autotoc_md1287", [
          [ "Example command", "bdev.html#autotoc_md1288", null ]
        ] ],
        [ "Delete the virtual crypto block device", "bdev.html#autotoc_md1289", null ],
        [ "dpdk_cryptodev mlx5_pci driver configuration", "bdev.html#autotoc_md1290", null ]
      ] ],
      [ "Delay Bdev Module", "bdev.html#bdev_config_delay", null ],
      [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", [
        [ "SPDK GPT partition table", "bdev.html#bdev_ug_gpt", null ],
        [ "Creating a GPT partition table using NBD", "bdev.html#bdev_ug_gpt_create_part", null ]
      ] ],
      [ "iSCSI bdev", "bdev.html#bdev_config_iscsi", null ],
      [ "Linux AIO bdev", "bdev.html#bdev_config_aio", null ],
      [ "OCF Virtual bdev", "bdev.html#bdev_config_cas", null ],
      [ "Malloc bdev", "bdev.html#bdev_config_malloc", null ],
      [ "Null", "bdev.html#bdev_config_null", null ],
      [ "NVMe bdev", "bdev.html#bdev_config_nvme", [
        [ "NVMe bdev character device", "bdev.html#bdev_config_nvme_cuse", null ]
      ] ],
      [ "Logical volumes", "bdev.html#bdev_ug_logical_volumes", [
        [ "Logical volume store", "bdev.html#bdev_ug_lvol_store", null ],
        [ "Lvols", "bdev.html#bdev_ug_lvols", null ]
      ] ],
      [ "Passthru", "bdev.html#bdev_config_passthru", null ],
      [ "RAID", "bdev.html#bdev_ug_raid", null ],
      [ "Split", "bdev.html#bdev_ug_split", null ],
      [ "Uring", "bdev.html#bdev_ug_uring", null ],
      [ "xNVMe", "bdev.html#bdev_ug_xnvme", null ],
      [ "Virtio Block", "bdev.html#bdev_config_virtio_blk", null ],
      [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ],
      [ "DAOS bdev", "bdev.html#bdev_config_daos", null ]
    ] ],
    [ "JSON-RPC", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", null ],
      [ "Parameters", "jsonrpc.html#autotoc_md526", [
        [ "Required parameters", "jsonrpc.html#autotoc_md527", null ],
        [ "Optional parameters", "jsonrpc.html#autotoc_md528", null ]
      ] ],
      [ "Error response message", "jsonrpc.html#jsonrpc_error_message", [
        [ "Parser error", "jsonrpc.html#jsonrpc_parser_error", null ],
        [ "Invalid params", "jsonrpc.html#jsonrpc_invalid_params", null ]
      ] ],
      [ "rpc.py", "jsonrpc.html#rpc_py", [
        [ "Generate JSON-RPC methods for current configuration", "jsonrpc.html#jsonrpc_generate", null ],
        [ "JSON-RPC Remote access", "jsonrpc.html#autotoc_md529", null ],
        [ "JSON-RPC batching", "jsonrpc.html#autotoc_md530", null ],
        [ "Adding external RPC methods", "jsonrpc.html#autotoc_md531", null ],
        [ "Converting from legacy configuration", "jsonrpc.html#jsonrpc_convert", null ]
      ] ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "spdk_kill_instance", "jsonrpc.html#rpc_spdk_kill_instance", [
          [ "Parameters", "jsonrpc.html#autotoc_md532", null ],
          [ "Example", "jsonrpc.html#autotoc_md533", null ]
        ] ],
        [ "framework_monitor_context_switch", "jsonrpc.html#rpc_framework_monitor_context_switch", [
          [ "Parameters", "jsonrpc.html#autotoc_md534", null ],
          [ "Response", "jsonrpc.html#autotoc_md535", null ],
          [ "Example", "jsonrpc.html#autotoc_md536", null ]
        ] ],
        [ "framework_start_init", "jsonrpc.html#rpc_framework_start_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md537", null ],
          [ "Response", "jsonrpc.html#autotoc_md538", null ],
          [ "Example", "jsonrpc.html#autotoc_md539", null ]
        ] ],
        [ "framework_wait_init", "jsonrpc.html#rpc_framework_wait_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md540", null ],
          [ "Response", "jsonrpc.html#autotoc_md541", null ],
          [ "Example", "jsonrpc.html#autotoc_md542", null ]
        ] ],
        [ "rpc_get_methods", "jsonrpc.html#rpc_rpc_get_methods", [
          [ "Parameters", "jsonrpc.html#autotoc_md543", null ],
          [ "Response", "jsonrpc.html#autotoc_md544", null ],
          [ "Example", "jsonrpc.html#autotoc_md545", null ]
        ] ],
        [ "framework_get_subsystems", "jsonrpc.html#rpc_framework_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md546", null ],
          [ "Response", "jsonrpc.html#autotoc_md547", null ],
          [ "Example", "jsonrpc.html#autotoc_md548", null ]
        ] ],
        [ "framework_get_config", "jsonrpc.html#rpc_framework_get_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md549", null ],
          [ "Response", "jsonrpc.html#autotoc_md550", null ],
          [ "Example", "jsonrpc.html#autotoc_md551", null ]
        ] ],
        [ "framework_get_reactors", "jsonrpc.html#rpc_framework_get_reactors", [
          [ "Parameters", "jsonrpc.html#autotoc_md552", null ],
          [ "Response", "jsonrpc.html#autotoc_md553", null ],
          [ "Example", "jsonrpc.html#autotoc_md554", null ]
        ] ],
        [ "framework_set_scheduler", "jsonrpc.html#rpc_framework_set_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md555", null ],
          [ "Response", "jsonrpc.html#autotoc_md556", null ],
          [ "Example", "jsonrpc.html#autotoc_md557", null ]
        ] ],
        [ "framework_get_scheduler", "jsonrpc.html#rpc_framework_get_scheduler", [
          [ "Parameters", "jsonrpc.html#autotoc_md558", null ],
          [ "Response", "jsonrpc.html#autotoc_md559", null ],
          [ "Example", "jsonrpc.html#autotoc_md560", null ]
        ] ],
        [ "framework_get_governor", "jsonrpc.html#rpc_framework_get_governor", [
          [ "Parameters", "jsonrpc.html#autotoc_md561", null ],
          [ "Response", "jsonrpc.html#autotoc_md562", null ],
          [ "Example", "jsonrpc.html#autotoc_md563", null ]
        ] ],
        [ "scheduler_set_options", "jsonrpc.html#rpc_scheduler_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md564", null ],
          [ "Example", "jsonrpc.html#autotoc_md565", null ]
        ] ],
        [ "framework_enable_cpumask_locks", "jsonrpc.html#rpc_framework_enable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md566", null ],
          [ "Response", "jsonrpc.html#autotoc_md567", null ],
          [ "Example", "jsonrpc.html#autotoc_md568", null ]
        ] ],
        [ "framework_disable_cpumask_locks", "jsonrpc.html#rpc_framework_disable_cpumask_locks", [
          [ "Parameters", "jsonrpc.html#autotoc_md569", null ],
          [ "Response", "jsonrpc.html#autotoc_md570", null ],
          [ "Example", "jsonrpc.html#autotoc_md571", null ]
        ] ],
        [ "thread_get_stats", "jsonrpc.html#rpc_thread_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md572", null ],
          [ "Response", "jsonrpc.html#autotoc_md573", null ],
          [ "Example", "jsonrpc.html#autotoc_md574", null ]
        ] ],
        [ "thread_set_cpumask", "jsonrpc.html#rpc_thread_set_cpumask", [
          [ "Parameters", "jsonrpc.html#autotoc_md575", null ],
          [ "Response", "jsonrpc.html#autotoc_md576", null ],
          [ "Example", "jsonrpc.html#autotoc_md577", null ]
        ] ],
        [ "trace_enable_tpoint_group", "jsonrpc.html#rpc_trace_enable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md578", null ],
          [ "Example", "jsonrpc.html#autotoc_md579", null ]
        ] ],
        [ "trace_disable_tpoint_group", "jsonrpc.html#rpc_trace_disable_tpoint_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md580", null ],
          [ "Example", "jsonrpc.html#autotoc_md581", null ]
        ] ],
        [ "trace_set_tpoint_mask", "jsonrpc.html#rpc_trace_set_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md582", null ],
          [ "Example", "jsonrpc.html#autotoc_md583", null ]
        ] ],
        [ "trace_clear_tpoint_mask", "jsonrpc.html#rpc_trace_clear_tpoint_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md584", null ],
          [ "Example", "jsonrpc.html#autotoc_md585", null ]
        ] ],
        [ "trace_get_tpoint_group_mask", "jsonrpc.html#rpc_trace_get_tpoint_group_mask", [
          [ "Parameters", "jsonrpc.html#autotoc_md586", null ],
          [ "Example", "jsonrpc.html#autotoc_md587", null ]
        ] ],
        [ "trace_clear", "jsonrpc.html#rpc_trace_clear", [
          [ "Parameters", "jsonrpc.html#autotoc_md588", null ],
          [ "Example", "jsonrpc.html#autotoc_md589", null ]
        ] ],
        [ "trace_get_info", "jsonrpc.html#rpc_trace_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md590", null ],
          [ "Example", "jsonrpc.html#autotoc_md591", null ]
        ] ],
        [ "log_set_print_level", "jsonrpc.html#rpc_log_set_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md592", null ],
          [ "Example", "jsonrpc.html#autotoc_md593", null ]
        ] ],
        [ "log_get_print_level", "jsonrpc.html#rpc_log_get_print_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md594", null ],
          [ "Example", "jsonrpc.html#autotoc_md595", null ]
        ] ],
        [ "log_set_level", "jsonrpc.html#rpc_log_set_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md596", null ],
          [ "Example", "jsonrpc.html#autotoc_md597", null ]
        ] ],
        [ "log_get_level", "jsonrpc.html#rpc_log_get_level", [
          [ "Parameters", "jsonrpc.html#autotoc_md598", null ],
          [ "Example", "jsonrpc.html#autotoc_md599", null ]
        ] ],
        [ "log_set_flag", "jsonrpc.html#rpc_log_set_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md600", null ],
          [ "Example", "jsonrpc.html#autotoc_md601", null ]
        ] ],
        [ "log_clear_flag", "jsonrpc.html#rpc_log_clear_flag", [
          [ "Parameters", "jsonrpc.html#autotoc_md602", null ],
          [ "Example", "jsonrpc.html#autotoc_md603", null ]
        ] ],
        [ "log_get_flags", "jsonrpc.html#rpc_log_get_flags", [
          [ "Parameters", "jsonrpc.html#autotoc_md604", null ],
          [ "Example", "jsonrpc.html#autotoc_md605", null ]
        ] ],
        [ "log_enable_timestamps", "jsonrpc.html#rpc_log_enable_timestamps", [
          [ "Parameters", "jsonrpc.html#autotoc_md606", null ],
          [ "Example", "jsonrpc.html#autotoc_md607", null ]
        ] ],
        [ "thread_get_pollers", "jsonrpc.html#rpc_thread_get_pollers", [
          [ "Parameters", "jsonrpc.html#autotoc_md608", null ],
          [ "Response", "jsonrpc.html#autotoc_md609", null ],
          [ "Example", "jsonrpc.html#autotoc_md610", null ]
        ] ],
        [ "thread_get_io_channels", "jsonrpc.html#rpc_thread_get_io_channels", [
          [ "Parameters", "jsonrpc.html#autotoc_md611", null ],
          [ "Response", "jsonrpc.html#autotoc_md612", null ],
          [ "Example", "jsonrpc.html#autotoc_md613", null ]
        ] ],
        [ "env_dpdk_get_mem_stats", "jsonrpc.html#rpc_env_dpdk_get_mem_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md614", null ],
          [ "Response", "jsonrpc.html#autotoc_md615", null ],
          [ "Example", "jsonrpc.html#autotoc_md616", null ]
        ] ]
      ] ],
      [ "Acceleration Framework Layer", "jsonrpc.html#jsonrpc_components_accel_fw", [
        [ "accel_get_module_info", "jsonrpc.html#rpc_accel_get_module_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md617", null ],
          [ "Example", "jsonrpc.html#autotoc_md618", null ]
        ] ],
        [ "accel_get_opc_assignments", "jsonrpc.html#rpc_accel_get_opc_assignments", [
          [ "Parameters", "jsonrpc.html#autotoc_md619", null ],
          [ "Example", "jsonrpc.html#autotoc_md620", null ]
        ] ],
        [ "accel_assign_opc", "jsonrpc.html#rpc_accel_assign_opc", [
          [ "Parameters", "jsonrpc.html#autotoc_md621", null ],
          [ "Example", "jsonrpc.html#autotoc_md622", null ]
        ] ],
        [ "accel_crypto_key_create", "jsonrpc.html#rpc_accel_crypto_key_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md623", null ],
          [ "Example", "jsonrpc.html#autotoc_md624", null ]
        ] ],
        [ "accel_crypto_key_destroy", "jsonrpc.html#rpc_accel_crypto_key_destroy", [
          [ "Parameters", "jsonrpc.html#autotoc_md625", null ],
          [ "Example", "jsonrpc.html#autotoc_md626", null ]
        ] ],
        [ "accel_crypto_keys_get", "jsonrpc.html#rpc_accel_crypto_keys_get", [
          [ "Parameters", "jsonrpc.html#autotoc_md627", null ],
          [ "Example", "jsonrpc.html#autotoc_md628", null ]
        ] ],
        [ "accel_set_driver", "jsonrpc.html#rpc_accel_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md629", null ],
          [ "Example", "jsonrpc.html#autotoc_md630", null ]
        ] ],
        [ "accel_set_options", "jsonrpc.html#rpc_accel_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md631", null ],
          [ "Example", "jsonrpc.html#autotoc_md632", null ]
        ] ],
        [ "accel_get_stats", "jsonrpc.html#rpc_accel_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md633", null ],
          [ "Example", "jsonrpc.html#autotoc_md634", null ]
        ] ],
        [ "accel_error_inject_error", "jsonrpc.html#rpc_accel_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md635", null ],
          [ "Example", "jsonrpc.html#autotoc_md636", null ]
        ] ],
        [ "compressdev_scan_accel_module", "jsonrpc.html#rpc_compressdev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md637", null ],
          [ "Example", "jsonrpc.html#autotoc_md638", null ]
        ] ],
        [ "dsa_scan_accel_module", "jsonrpc.html#rpc_dsa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md639", null ],
          [ "Example", "jsonrpc.html#autotoc_md640", null ]
        ] ],
        [ "iaa_scan_accel_module", "jsonrpc.html#rpc_iaa_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md641", null ],
          [ "Example", "jsonrpc.html#autotoc_md642", null ]
        ] ],
        [ "ioat_scan_accel_module", "jsonrpc.html#rpc_ioat_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md643", null ],
          [ "Example", "jsonrpc.html#autotoc_md644", null ]
        ] ],
        [ "ae4dma_scan_accel_module", "jsonrpc.html#rpc_ae4dma_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md645", null ],
          [ "Example", "jsonrpc.html#autotoc_md646", null ]
        ] ],
        [ "cuda_scan_accel_module", "jsonrpc.html#rpc_cuda_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md647", null ],
          [ "Example", "jsonrpc.html#autotoc_md648", null ]
        ] ],
        [ "dpdk_cryptodev_scan_accel_module", "jsonrpc.html#rpc_dpdk_cryptodev_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md649", null ],
          [ "Example", "jsonrpc.html#autotoc_md650", null ]
        ] ],
        [ "dpdk_cryptodev_set_driver", "jsonrpc.html#rpc_dpdk_cryptodev_set_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md651", null ],
          [ "Example", "jsonrpc.html#autotoc_md652", null ]
        ] ],
        [ "dpdk_cryptodev_get_driver", "jsonrpc.html#rpc_dpdk_cryptodev_get_driver", [
          [ "Parameters", "jsonrpc.html#autotoc_md653", null ],
          [ "Example", "jsonrpc.html#autotoc_md654", null ]
        ] ],
        [ "mlx5_scan_accel_module", "jsonrpc.html#rpc_mlx5_scan_accel_module", [
          [ "Parameters", "jsonrpc.html#autotoc_md655", null ],
          [ "Example", "jsonrpc.html#autotoc_md656", null ]
        ] ],
        [ "accel_mlx5_dump_stats", "jsonrpc.html#rpc_accel_mlx5_dump_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md657", null ],
          [ "Example", "jsonrpc.html#autotoc_md658", null ]
        ] ]
      ] ],
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "bdev_set_options", "jsonrpc.html#rpc_bdev_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md659", null ],
          [ "Example", "jsonrpc.html#autotoc_md660", null ]
        ] ],
        [ "bdev_get_bdevs", "jsonrpc.html#rpc_bdev_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md661", null ],
          [ "Response", "jsonrpc.html#autotoc_md662", null ],
          [ "Example", "jsonrpc.html#autotoc_md663", null ]
        ] ],
        [ "bdev_examine", "jsonrpc.html#rpc_bdev_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md664", null ],
          [ "Response", "jsonrpc.html#autotoc_md665", null ],
          [ "Example", "jsonrpc.html#autotoc_md666", null ]
        ] ],
        [ "bdev_wait_for_examine", "jsonrpc.html#rpc_bdev_wait_for_examine", [
          [ "Parameters", "jsonrpc.html#autotoc_md667", null ],
          [ "Response", "jsonrpc.html#autotoc_md668", null ],
          [ "Example", "jsonrpc.html#autotoc_md669", null ]
        ] ],
        [ "bdev_get_iostat", "jsonrpc.html#rpc_bdev_get_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md670", null ],
          [ "Response", "jsonrpc.html#autotoc_md671", null ],
          [ "Example", "jsonrpc.html#autotoc_md672", null ]
        ] ],
        [ "bdev_reset_iostat", "jsonrpc.html#rpc_bdev_reset_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md673", null ],
          [ "Example", "jsonrpc.html#autotoc_md674", null ]
        ] ],
        [ "bdev_enable_histogram", "jsonrpc.html#rpc_bdev_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md675", null ],
          [ "Example", "jsonrpc.html#autotoc_md676", null ]
        ] ],
        [ "bdev_get_histogram", "jsonrpc.html#rpc_bdev_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md677", null ],
          [ "Response", "jsonrpc.html#autotoc_md678", null ],
          [ "Example", "jsonrpc.html#autotoc_md679", null ]
        ] ],
        [ "bdev_get_histogram_borders", "jsonrpc.html#rpc_bdev_get_histogram_borders", [
          [ "Parameters", "jsonrpc.html#autotoc_md680", null ],
          [ "Response", "jsonrpc.html#autotoc_md681", null ],
          [ "Example", "jsonrpc.html#autotoc_md682", null ]
        ] ],
        [ "bdev_set_qos_limit", "jsonrpc.html#rpc_bdev_set_qos_limit", [
          [ "Parameters", "jsonrpc.html#autotoc_md683", null ],
          [ "Example", "jsonrpc.html#autotoc_md684", null ]
        ] ],
        [ "bdev_set_qd_sampling_period", "jsonrpc.html#rpc_bdev_set_qd_sampling_period", [
          [ "Parameters", "jsonrpc.html#autotoc_md685", null ],
          [ "Example", "jsonrpc.html#autotoc_md686", null ]
        ] ],
        [ "bdev_crypto_create", "jsonrpc.html#rpc_bdev_crypto_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md687", null ],
          [ "Response", "jsonrpc.html#autotoc_md688", null ],
          [ "Example", "jsonrpc.html#autotoc_md689", null ]
        ] ],
        [ "bdev_crypto_delete", "jsonrpc.html#rpc_bdev_crypto_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md690", null ],
          [ "Example", "jsonrpc.html#autotoc_md691", null ]
        ] ],
        [ "bdev_ocf_create", "jsonrpc.html#rpc_bdev_ocf_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md692", null ],
          [ "Response", "jsonrpc.html#autotoc_md693", null ],
          [ "Example", "jsonrpc.html#autotoc_md694", null ]
        ] ],
        [ "bdev_ocf_delete", "jsonrpc.html#rpc_bdev_ocf_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md695", null ],
          [ "Example", "jsonrpc.html#autotoc_md696", null ]
        ] ],
        [ "bdev_ocf_get_stats", "jsonrpc.html#rpc_bdev_ocf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md697", null ],
          [ "Response", "jsonrpc.html#autotoc_md698", null ],
          [ "Example", "jsonrpc.html#autotoc_md699", null ]
        ] ],
        [ "bdev_ocf_reset_stats", "jsonrpc.html#rpc_bdev_ocf_reset_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md700", null ],
          [ "Response", "jsonrpc.html#autotoc_md701", null ],
          [ "Example", "jsonrpc.html#autotoc_md702", null ]
        ] ],
        [ "bdev_ocf_get_bdevs", "jsonrpc.html#rpc_bdev_ocf_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md703", null ],
          [ "Response", "jsonrpc.html#autotoc_md704", null ],
          [ "Example", "jsonrpc.html#autotoc_md705", null ]
        ] ],
        [ "bdev_ocf_set_cache_mode", "jsonrpc.html#rpc_bdev_ocf_set_cache_mode", [
          [ "Parameters", "jsonrpc.html#autotoc_md706", null ],
          [ "Response", "jsonrpc.html#autotoc_md707", null ],
          [ "Example", "jsonrpc.html#autotoc_md708", null ]
        ] ],
        [ "bdev_ocf_set_seqcutoff", "jsonrpc.html#rpc_bdev_ocf_set_seqcutoff", [
          [ "Parameters", "jsonrpc.html#autotoc_md709", null ],
          [ "Example", "jsonrpc.html#autotoc_md710", null ]
        ] ],
        [ "bdev_ocf_flush_start", "jsonrpc.html#rpc_bdev_ocf_flush_start", [
          [ "Parameters", "jsonrpc.html#autotoc_md711", null ],
          [ "Example", "jsonrpc.html#autotoc_md712", null ]
        ] ],
        [ "bdev_ocf_flush_status", "jsonrpc.html#rpc_bdev_ocf_flush_status", [
          [ "Parameters", "jsonrpc.html#autotoc_md713", null ],
          [ "Response", "jsonrpc.html#autotoc_md714", null ],
          [ "Example", "jsonrpc.html#autotoc_md715", null ]
        ] ],
        [ "bdev_malloc_create", "jsonrpc.html#rpc_bdev_malloc_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md716", null ],
          [ "Response", "jsonrpc.html#autotoc_md717", null ],
          [ "Example", "jsonrpc.html#autotoc_md718", null ]
        ] ],
        [ "bdev_malloc_delete", "jsonrpc.html#rpc_bdev_malloc_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md719", null ],
          [ "Example", "jsonrpc.html#autotoc_md720", null ]
        ] ],
        [ "bdev_null_create", "jsonrpc.html#rpc_bdev_null_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md721", null ],
          [ "Response", "jsonrpc.html#autotoc_md722", null ],
          [ "Example", "jsonrpc.html#autotoc_md723", null ]
        ] ],
        [ "bdev_null_delete", "jsonrpc.html#rpc_bdev_null_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md724", null ],
          [ "Example", "jsonrpc.html#autotoc_md725", null ]
        ] ],
        [ "bdev_null_resize", "jsonrpc.html#rpc_bdev_null_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md726", null ],
          [ "Example", "jsonrpc.html#autotoc_md727", null ]
        ] ],
        [ "bdev_aio_create", "jsonrpc.html#rpc_bdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md728", null ],
          [ "Response", "jsonrpc.html#autotoc_md729", null ],
          [ "Example", "jsonrpc.html#autotoc_md730", null ]
        ] ],
        [ "bdev_aio_rescan", "jsonrpc.html#rpc_bdev_aio_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md731", null ],
          [ "Example", "jsonrpc.html#autotoc_md732", null ]
        ] ],
        [ "bdev_aio_delete", "jsonrpc.html#rpc_bdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md733", null ],
          [ "Example", "jsonrpc.html#autotoc_md734", null ]
        ] ],
        [ "bdev_nvme_set_options", "jsonrpc.html#rpc_bdev_nvme_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md735", null ],
          [ "Example", "jsonrpc.html#autotoc_md736", null ]
        ] ],
        [ "bdev_nvme_set_hotplug", "jsonrpc.html#rpc_bdev_nvme_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md737", null ],
          [ "Example", "jsonrpc.html#autotoc_md738", null ]
        ] ],
        [ "bdev_nvme_attach_controller", "jsonrpc.html#rpc_bdev_nvme_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md739", null ],
          [ "Response", "jsonrpc.html#autotoc_md740", null ],
          [ "Example", "jsonrpc.html#autotoc_md741", null ]
        ] ],
        [ "bdev_nvme_get_controllers", "jsonrpc.html#rpc_bdev_nvme_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md742", null ],
          [ "Response", "jsonrpc.html#autotoc_md743", null ],
          [ "Example", "jsonrpc.html#autotoc_md744", null ]
        ] ],
        [ "bdev_nvme_detach_controller", "jsonrpc.html#rpc_bdev_nvme_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md745", null ],
          [ "Example", "jsonrpc.html#autotoc_md746", null ]
        ] ],
        [ "bdev_nvme_reset_controller", "jsonrpc.html#rpc_bdev_nvme_reset_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md747", null ],
          [ "Example", "jsonrpc.html#autotoc_md748", null ]
        ] ],
        [ "bdev_nvme_enable_controller", "jsonrpc.html#rpc_bdev_nvme_enable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md749", null ],
          [ "Example", "jsonrpc.html#autotoc_md750", null ]
        ] ],
        [ "bdev_nvme_disable_controller", "jsonrpc.html#rpc_bdev_nvme_disable_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md751", null ],
          [ "Example", "jsonrpc.html#autotoc_md752", null ]
        ] ],
        [ "bdev_nvme_start_discovery", "jsonrpc.html#rpc_bdev_nvme_start_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md753", null ],
          [ "Example", "jsonrpc.html#autotoc_md754", null ]
        ] ],
        [ "bdev_nvme_stop_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md755", null ],
          [ "Example", "jsonrpc.html#autotoc_md756", null ]
        ] ],
        [ "bdev_nvme_get_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md757", null ],
          [ "Example", "jsonrpc.html#autotoc_md758", null ]
        ] ],
        [ "bdev_nvme_get_io_paths", "jsonrpc.html#rpc_bdev_nvme_get_io_paths", [
          [ "Parameters", "jsonrpc.html#autotoc_md759", null ],
          [ "Example", "jsonrpc.html#autotoc_md760", null ]
        ] ],
        [ "bdev_nvme_set_preferred_path", "jsonrpc.html#rpc_bdev_nvme_set_preferred_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md761", null ],
          [ "Example", "jsonrpc.html#autotoc_md762", null ]
        ] ],
        [ "bdev_nvme_set_multipath_policy", "jsonrpc.html#rpc_bdev_nvme_set_multipath_policy", [
          [ "Parameters", "jsonrpc.html#autotoc_md763", null ],
          [ "Example", "jsonrpc.html#autotoc_md764", null ]
        ] ],
        [ "bdev_nvme_get_path_iostat", "jsonrpc.html#rpc_bdev_nvme_get_path_iostat", [
          [ "Parameters", "jsonrpc.html#autotoc_md765", null ],
          [ "Example", "jsonrpc.html#autotoc_md766", null ]
        ] ],
        [ "bdev_nvme_cuse_register", "jsonrpc.html#rpc_bdev_nvme_cuse_register", [
          [ "Parameters", "jsonrpc.html#autotoc_md767", null ],
          [ "Example", "jsonrpc.html#autotoc_md768", null ]
        ] ],
        [ "bdev_nvme_cuse_unregister", "jsonrpc.html#rpc_bdev_nvme_cuse_unregister", [
          [ "Parameters", "jsonrpc.html#autotoc_md769", null ],
          [ "Example", "jsonrpc.html#autotoc_md770", null ]
        ] ],
        [ "bdev_nvme_set_keys", "jsonrpc.html#rpc_bdev_nvme_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md771", null ],
          [ "Example", "jsonrpc.html#autotoc_md772", null ]
        ] ],
        [ "bdev_zone_block_create", "jsonrpc.html#rpc_bdev_zone_block_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md773", null ],
          [ "Example", "jsonrpc.html#autotoc_md774", null ]
        ] ],
        [ "bdev_zone_block_delete", "jsonrpc.html#rpc_bdev_zone_block_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md775", null ],
          [ "Example", "jsonrpc.html#autotoc_md776", null ]
        ] ],
        [ "bdev_nvme_apply_firmware", "jsonrpc.html#rpc_bdev_nvme_apply_firmware", [
          [ "Parameters", "jsonrpc.html#autotoc_md777", null ],
          [ "Example", "jsonrpc.html#autotoc_md778", null ]
        ] ],
        [ "bdev_nvme_get_transport_statistics", "jsonrpc.html#rpc_bdev_nvme_get_transport_statistics", [
          [ "Parameters", "jsonrpc.html#autotoc_md779", null ],
          [ "Response", "jsonrpc.html#autotoc_md780", null ],
          [ "Example", "jsonrpc.html#autotoc_md781", null ]
        ] ],
        [ "bdev_nvme_get_controller_health_info", "jsonrpc.html#rpc_bdev_nvme_get_controller_health_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md782", null ],
          [ "Response", "jsonrpc.html#autotoc_md783", null ],
          [ "Example", "jsonrpc.html#autotoc_md784", null ]
        ] ],
        [ "bdev_rbd_register_cluster", "jsonrpc.html#rpc_bdev_rbd_register_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md785", null ],
          [ "Response", "jsonrpc.html#autotoc_md786", null ],
          [ "Example", "jsonrpc.html#autotoc_md787", null ]
        ] ],
        [ "bdev_rbd_unregister_cluster", "jsonrpc.html#rpc_bdev_rbd_unregister_cluster", [
          [ "Parameters", "jsonrpc.html#autotoc_md788", null ],
          [ "Response", "jsonrpc.html#autotoc_md789", null ],
          [ "Example", "jsonrpc.html#autotoc_md790", null ]
        ] ],
        [ "bdev_rbd_get_clusters_info", "jsonrpc.html#rpc_bdev_rbd_get_clusters_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md791", null ],
          [ "Response", "jsonrpc.html#autotoc_md792", null ],
          [ "Example", "jsonrpc.html#autotoc_md793", null ]
        ] ],
        [ "bdev_rbd_create", "jsonrpc.html#rpc_bdev_rbd_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md794", null ],
          [ "Response", "jsonrpc.html#autotoc_md795", null ],
          [ "Example", "jsonrpc.html#autotoc_md796", null ]
        ] ],
        [ "bdev_rbd_delete", "jsonrpc.html#rpc_bdev_rbd_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md797", null ],
          [ "Response", "jsonrpc.html#autotoc_md798", null ],
          [ "Example", "jsonrpc.html#autotoc_md799", null ]
        ] ],
        [ "bdev_rbd_resize", "jsonrpc.html#rpc_bdev_rbd_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md800", null ],
          [ "Response", "jsonrpc.html#autotoc_md801", null ],
          [ "Example", "jsonrpc.html#autotoc_md802", null ]
        ] ],
        [ "bdev_delay_create", "jsonrpc.html#rpc_bdev_delay_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md803", null ],
          [ "Response", "jsonrpc.html#autotoc_md804", null ],
          [ "Example", "jsonrpc.html#autotoc_md805", null ]
        ] ],
        [ "bdev_delay_delete", "jsonrpc.html#rpc_bdev_delay_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md806", null ],
          [ "Example", "jsonrpc.html#autotoc_md807", null ]
        ] ],
        [ "bdev_delay_update_latency", "jsonrpc.html#rpc_bdev_delay_update_latency", [
          [ "Parameters", "jsonrpc.html#autotoc_md808", null ],
          [ "Response", "jsonrpc.html#autotoc_md809", null ],
          [ "Example", "jsonrpc.html#autotoc_md810", null ]
        ] ],
        [ "bdev_error_create", "jsonrpc.html#rpc_bdev_error_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md811", null ],
          [ "Example", "jsonrpc.html#autotoc_md812", null ]
        ] ],
        [ "bdev_error_delete", "jsonrpc.html#rpc_bdev_error_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md813", null ],
          [ "Response", "jsonrpc.html#autotoc_md814", null ],
          [ "Example", "jsonrpc.html#autotoc_md815", null ]
        ] ],
        [ "bdev_error_inject_error", "jsonrpc.html#rpc_bdev_error_inject_error", [
          [ "Parameters", "jsonrpc.html#autotoc_md816", null ],
          [ "Example", "jsonrpc.html#autotoc_md817", null ]
        ] ],
        [ "bdev_iscsi_set_options", "jsonrpc.html#rpc_bdev_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md818", null ],
          [ "Example", "jsonrpc.html#autotoc_md819", null ]
        ] ],
        [ "bdev_iscsi_create", "jsonrpc.html#rpc_bdev_iscsi_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md820", null ],
          [ "Response", "jsonrpc.html#autotoc_md821", null ],
          [ "Example", "jsonrpc.html#autotoc_md822", null ]
        ] ],
        [ "bdev_iscsi_delete", "jsonrpc.html#rpc_bdev_iscsi_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md823", null ],
          [ "Example", "jsonrpc.html#autotoc_md824", null ]
        ] ],
        [ "bdev_ftl_create", "jsonrpc.html#rpc_bdev_ftl_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md825", null ],
          [ "Response", "jsonrpc.html#autotoc_md826", null ],
          [ "Example", "jsonrpc.html#autotoc_md827", null ]
        ] ],
        [ "bdev_ftl_delete", "jsonrpc.html#rpc_bdev_ftl_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md828", null ],
          [ "Example", "jsonrpc.html#autotoc_md829", null ]
        ] ],
        [ "bdev_ftl_unmap", "jsonrpc.html#rpc_bdev_ftl_unmap", [
          [ "Parameters", "jsonrpc.html#autotoc_md830", null ],
          [ "Example", "jsonrpc.html#autotoc_md831", null ]
        ] ],
        [ "bdev_ftl_get_stats", "jsonrpc.html#rpc_bdev_ftl_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md832", null ],
          [ "Response", "jsonrpc.html#autotoc_md833", null ],
          [ "Example", "jsonrpc.html#autotoc_md834", null ]
        ] ],
        [ "bdev_ftl_get_properties", "jsonrpc.html#rpc_bdev_ftl_get_properties", [
          [ "Parameters", "jsonrpc.html#autotoc_md835", null ],
          [ "Response", "jsonrpc.html#autotoc_md836", null ],
          [ "Example", "jsonrpc.html#autotoc_md837", null ]
        ] ],
        [ "bdev_ftl_set_property", "jsonrpc.html#rpc_bdev_ftl_set_property", [
          [ "Parameters", "jsonrpc.html#autotoc_md838", null ],
          [ "Example", "jsonrpc.html#autotoc_md839", null ]
        ] ],
        [ "bdev_passthru_create", "jsonrpc.html#rpc_bdev_passthru_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md840", null ],
          [ "Response", "jsonrpc.html#autotoc_md841", null ],
          [ "Example", "jsonrpc.html#autotoc_md842", null ]
        ] ],
        [ "bdev_passthru_delete", "jsonrpc.html#rpc_bdev_passthru_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md843", null ],
          [ "Example", "jsonrpc.html#autotoc_md844", null ]
        ] ],
        [ "bdev_xnvme_create", "jsonrpc.html#rpc_bdev_xnvme_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md845", null ],
          [ "Response", "jsonrpc.html#autotoc_md846", null ],
          [ "Example", "jsonrpc.html#autotoc_md847", null ]
        ] ],
        [ "bdev_xnvme_delete", "jsonrpc.html#rpc_bdev_xnvme_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md848", null ],
          [ "Example", "jsonrpc.html#autotoc_md849", null ]
        ] ],
        [ "bdev_virtio_attach_controller", "jsonrpc.html#rpc_bdev_virtio_attach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md850", null ],
          [ "Response", "jsonrpc.html#autotoc_md851", null ],
          [ "Example", "jsonrpc.html#autotoc_md852", null ]
        ] ],
        [ "bdev_virtio_scsi_get_devices", "jsonrpc.html#rpc_bdev_virtio_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md853", null ],
          [ "Response", "jsonrpc.html#autotoc_md854", null ],
          [ "Example", "jsonrpc.html#autotoc_md855", null ]
        ] ],
        [ "bdev_virtio_detach_controller", "jsonrpc.html#rpc_bdev_virtio_detach_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md856", null ],
          [ "Example", "jsonrpc.html#autotoc_md857", null ]
        ] ],
        [ "bdev_virtio_blk_set_hotplug", "jsonrpc.html#rpc_bdev_virtio_blk_set_hotplug", [
          [ "Parameters", "jsonrpc.html#autotoc_md858", null ],
          [ "Response", "jsonrpc.html#autotoc_md859", null ],
          [ "Example", "jsonrpc.html#autotoc_md860", null ]
        ] ]
      ] ],
      [ "iSCSI Target", "jsonrpc.html#jsonrpc_components_iscsi_tgt", [
        [ "iscsi_set_options", "jsonrpc.html#rpc_iscsi_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md861", null ],
          [ "Example", "jsonrpc.html#autotoc_md862", null ]
        ] ],
        [ "iscsi_get_options", "jsonrpc.html#rpc_iscsi_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md863", null ],
          [ "Example", "jsonrpc.html#autotoc_md864", null ]
        ] ],
        [ "scsi_get_devices", "jsonrpc.html#rpc_scsi_get_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md865", null ],
          [ "Example", "jsonrpc.html#autotoc_md866", null ]
        ] ],
        [ "iscsi_set_discovery_auth", "jsonrpc.html#rpc_iscsi_set_discovery_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md867", null ],
          [ "Example", "jsonrpc.html#autotoc_md868", null ]
        ] ],
        [ "iscsi_create_auth_group", "jsonrpc.html#rpc_iscsi_create_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md869", [
            [ "secret", "jsonrpc.html#rpc_iscsi_create_auth_group_secret", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md870", null ]
        ] ],
        [ "iscsi_delete_auth_group", "jsonrpc.html#rpc_iscsi_delete_auth_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md871", null ],
          [ "Example", "jsonrpc.html#autotoc_md872", null ]
        ] ],
        [ "iscsi_get_auth_groups", "jsonrpc.html#rpc_iscsi_get_auth_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md873", null ],
          [ "Response", "jsonrpc.html#autotoc_md874", null ],
          [ "Example", "jsonrpc.html#autotoc_md875", null ]
        ] ],
        [ "iscsi_auth_group_add_secret", "jsonrpc.html#rpc_iscsi_auth_group_add_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md876", null ],
          [ "Example", "jsonrpc.html#autotoc_md877", null ]
        ] ],
        [ "iscsi_auth_group_remove_secret", "jsonrpc.html#rpc_iscsi_auth_group_remove_secret", [
          [ "Parameters", "jsonrpc.html#autotoc_md878", null ],
          [ "Example", "jsonrpc.html#autotoc_md879", null ]
        ] ],
        [ "iscsi_get_initiator_groups", "jsonrpc.html#rpc_iscsi_get_initiator_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md880", null ],
          [ "Response", "jsonrpc.html#autotoc_md881", null ],
          [ "Example", "jsonrpc.html#autotoc_md882", null ]
        ] ],
        [ "iscsi_create_initiator_group", "jsonrpc.html#rpc_iscsi_create_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md883", null ],
          [ "Example", "jsonrpc.html#autotoc_md884", null ]
        ] ],
        [ "iscsi_delete_initiator_group", "jsonrpc.html#rpc_iscsi_delete_initiator_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md885", null ],
          [ "Example", "jsonrpc.html#autotoc_md886", null ]
        ] ],
        [ "iscsi_initiator_group_add_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_add_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md887", null ],
          [ "Example", "jsonrpc.html#autotoc_md888", null ]
        ] ],
        [ "iscsi_initiator_group_remove_initiators", "jsonrpc.html#rpc_iscsi_initiator_group_remove_initiators", [
          [ "Parameters", "jsonrpc.html#autotoc_md889", null ],
          [ "Example", "jsonrpc.html#autotoc_md890", null ]
        ] ],
        [ "iscsi_get_target_nodes", "jsonrpc.html#rpc_iscsi_get_target_nodes", [
          [ "Parameters", "jsonrpc.html#autotoc_md891", null ],
          [ "Response", "jsonrpc.html#autotoc_md892", null ],
          [ "Example", "jsonrpc.html#autotoc_md893", null ]
        ] ],
        [ "iscsi_create_target_node", "jsonrpc.html#rpc_iscsi_create_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md894", null ],
          [ "Example", "jsonrpc.html#autotoc_md895", null ]
        ] ],
        [ "iscsi_target_node_set_auth", "jsonrpc.html#rpc_iscsi_target_node_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md896", null ],
          [ "Example", "jsonrpc.html#autotoc_md897", null ]
        ] ],
        [ "iscsi_target_node_add_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_add_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md898", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md899", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md900", null ]
        ] ],
        [ "iscsi_target_node_remove_pg_ig_maps", "jsonrpc.html#rpc_iscsi_target_node_remove_pg_ig_maps", [
          [ "Parameters", "jsonrpc.html#autotoc_md901", [
            [ "Portal to Initiator group mappings object", "jsonrpc.html#autotoc_md902", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md903", null ]
        ] ],
        [ "iscsi_delete_target_node", "jsonrpc.html#rpc_iscsi_delete_target_node", [
          [ "Parameters", "jsonrpc.html#autotoc_md904", null ],
          [ "Example", "jsonrpc.html#autotoc_md905", null ]
        ] ],
        [ "iscsi_get_portal_groups", "jsonrpc.html#rpc_iscsi_get_portal_groups", [
          [ "Parameters", "jsonrpc.html#autotoc_md906", null ],
          [ "Example", "jsonrpc.html#autotoc_md907", null ]
        ] ],
        [ "iscsi_create_portal_group", "jsonrpc.html#rpc_iscsi_create_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md908", [
            [ "Portal object", "jsonrpc.html#autotoc_md909", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md910", null ]
        ] ],
        [ "iscsi_start_portal_group", "jsonrpc.html#rpc_iscsi_start_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md911", null ],
          [ "Example", "jsonrpc.html#autotoc_md912", null ]
        ] ],
        [ "iscsi_delete_portal_group", "jsonrpc.html#rpc_iscsi_delete_portal_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md913", null ],
          [ "Example", "jsonrpc.html#autotoc_md914", null ]
        ] ],
        [ "iscsi_portal_group_set_auth", "jsonrpc.html#rpc_iscsi_portal_group_set_auth", [
          [ "Parameters", "jsonrpc.html#autotoc_md915", null ],
          [ "Example", "jsonrpc.html#autotoc_md916", null ]
        ] ],
        [ "iscsi_get_connections", "jsonrpc.html#rpc_iscsi_get_connections", [
          [ "Parameters", "jsonrpc.html#autotoc_md917", null ],
          [ "Response", "jsonrpc.html#autotoc_md918", null ],
          [ "Example", "jsonrpc.html#autotoc_md919", null ]
        ] ],
        [ "iscsi_get_stats", "jsonrpc.html#rpc_iscsi_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md920", null ],
          [ "Response", "jsonrpc.html#autotoc_md921", null ],
          [ "Example", "jsonrpc.html#autotoc_md922", null ]
        ] ],
        [ "iscsi_target_node_add_lun", "jsonrpc.html#rpc_iscsi_target_node_add_lun", [
          [ "Parameters", "jsonrpc.html#autotoc_md923", null ],
          [ "Example", "jsonrpc.html#autotoc_md924", null ]
        ] ],
        [ "iscsi_target_node_set_redirect", "jsonrpc.html#rpc_iscsi_target_node_set_redirect", [
          [ "Parameters", "jsonrpc.html#autotoc_md925", null ],
          [ "Example", "jsonrpc.html#autotoc_md926", null ]
        ] ],
        [ "iscsi_target_node_request_logout", "jsonrpc.html#rpc_iscsi_target_node_request_logout", [
          [ "Parameters", "jsonrpc.html#autotoc_md927", null ],
          [ "Example", "jsonrpc.html#autotoc_md928", null ]
        ] ],
        [ "iscsi_enable_histogram", "jsonrpc.html#rpc_iscsi_enable_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md929", null ],
          [ "Example", "jsonrpc.html#autotoc_md930", null ]
        ] ],
        [ "iscsi_get_histogram", "jsonrpc.html#rpc_iscsi_get_histogram", [
          [ "Parameters", "jsonrpc.html#autotoc_md931", null ],
          [ "Response", "jsonrpc.html#autotoc_md932", null ],
          [ "Example", "jsonrpc.html#autotoc_md933", null ]
        ] ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "nvmf_create_transport", "jsonrpc.html#rpc_nvmf_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md934", null ],
          [ "Example", "jsonrpc.html#autotoc_md935", null ]
        ] ],
        [ "nvmf_get_subsystems", "jsonrpc.html#rpc_nvmf_get_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md936", null ],
          [ "Example", "jsonrpc.html#autotoc_md937", null ]
        ] ],
        [ "nvmf_create_subsystem", "jsonrpc.html#rpc_nvmf_create_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md938", null ],
          [ "Example", "jsonrpc.html#autotoc_md939", null ]
        ] ],
        [ "nvmf_delete_subsystem", "jsonrpc.html#rpc_nvmf_delete_subsystem", [
          [ "Parameters", "jsonrpc.html#autotoc_md940", null ],
          [ "Example", "jsonrpc.html#autotoc_md941", null ]
        ] ],
        [ "nvmf_subsystem_add_listener", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md942", [
            [ "listen_address", "jsonrpc.html#rpc_nvmf_listen_address", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md943", null ]
        ] ],
        [ "nvmf_subsystem_remove_listener", "jsonrpc.html#rpc_nvmf_subsystem_remove_listener", [
          [ "Parameters", "jsonrpc.html#autotoc_md944", null ],
          [ "Example", "jsonrpc.html#autotoc_md945", null ]
        ] ],
        [ "nvmf_subsystem_listener_set_ana_state", "jsonrpc.html#rpc_nvmf_subsystem_listener_set_ana_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md946", null ],
          [ "Example", "jsonrpc.html#autotoc_md947", null ]
        ] ],
        [ "nvmf_subsystem_add_ns", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md948", [
            [ "namespace", "jsonrpc.html#rpc_nvmf_namespace", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md949", null ]
        ] ],
        [ "nvmf_subsystem_remove_ns", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", [
          [ "Parameters", "jsonrpc.html#autotoc_md950", null ],
          [ "Example", "jsonrpc.html#autotoc_md951", null ]
        ] ],
        [ "nvmf_subsystem_set_ns_ana_group", "jsonrpc.html#rpc_nvmf_subsystem_set_ns_ana_group", [
          [ "Parameters", "jsonrpc.html#autotoc_md952", null ],
          [ "Example", "jsonrpc.html#autotoc_md953", null ]
        ] ],
        [ "nvmf_subsystem_add_host", "jsonrpc.html#rpc_nvmf_subsystem_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md954", null ],
          [ "Example", "jsonrpc.html#autotoc_md955", null ]
        ] ],
        [ "nvmf_subsystem_remove_host", "jsonrpc.html#rpc_nvmf_subsystem_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md956", null ],
          [ "Example", "jsonrpc.html#autotoc_md957", null ]
        ] ],
        [ "nvmf_subsystem_allow_any_host", "jsonrpc.html#rpc_nvmf_subsystem_allow_any_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md958", null ],
          [ "Example", "jsonrpc.html#autotoc_md959", null ]
        ] ],
        [ "nvmf_subsystem_set_keys", "jsonrpc.html#rpc_nvmf_subsystem_set_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md960", null ],
          [ "Example", "jsonrpc.html#autotoc_md961", null ]
        ] ],
        [ "nvmf_subsystem_get_controllers", "jsonrpc.html#rpc_nvmf_subsystem_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md962", null ],
          [ "Example", "jsonrpc.html#autotoc_md963", null ]
        ] ],
        [ "nvmf_subsystem_get_qpairs", "jsonrpc.html#rpc_nvmf_subsystem_get_qpairs", [
          [ "Parameters", "jsonrpc.html#autotoc_md964", null ],
          [ "Example", "jsonrpc.html#autotoc_md965", null ]
        ] ],
        [ "nvmf_subsystem_get_listeners", "jsonrpc.html#rpc_nvmf_subsystem_get_listeners", [
          [ "Parameters", "jsonrpc.html#autotoc_md966", null ],
          [ "Example", "jsonrpc.html#autotoc_md967", null ]
        ] ],
        [ "nvmf_ns_add_host", "jsonrpc.html#rpc_nvmf_ns_add_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md968", null ],
          [ "Example", "jsonrpc.html#autotoc_md969", null ]
        ] ],
        [ "nvmf_ns_remove_host", "jsonrpc.html#rpc_nvmf_ns_remove_host", [
          [ "Parameters", "jsonrpc.html#autotoc_md970", null ],
          [ "Example", "jsonrpc.html#autotoc_md971", null ]
        ] ],
        [ "nvmf_set_max_subsystems", "jsonrpc.html#rpc_nvmf_set_max_subsystems", [
          [ "Parameters", "jsonrpc.html#autotoc_md972", null ],
          [ "Example", "jsonrpc.html#autotoc_md973", null ]
        ] ],
        [ "nvmf_discovery_add_referral", "jsonrpc.html#rpc_nvmf_discovery_add_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md974", null ],
          [ "Example", "jsonrpc.html#autotoc_md975", null ]
        ] ],
        [ "nvmf_discovery_remove_referral", "jsonrpc.html#rpc_nvmf_discovery_remove_referral", [
          [ "Parameters", "jsonrpc.html#autotoc_md976", null ],
          [ "Example", "jsonrpc.html#autotoc_md977", null ]
        ] ],
        [ "nvmf_discovery_get_referrals", "jsonrpc.html#rpc_nvmf_discovery_get_referrals", [
          [ "Parameters", "jsonrpc.html#autotoc_md978", null ],
          [ "Example", "jsonrpc.html#autotoc_md979", null ]
        ] ],
        [ "nvmf_set_config", "jsonrpc.html#rpc_nvmf_set_config", [
          [ "Parameters", "jsonrpc.html#autotoc_md980", [
            [ "admin_cmd_passthru", "jsonrpc.html#spdk_nvmf_admin_passthru_conf", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md981", null ]
        ] ],
        [ "nvmf_get_transports", "jsonrpc.html#rpc_nvmf_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md982", null ],
          [ "Example", "jsonrpc.html#autotoc_md983", null ]
        ] ],
        [ "nvmf_get_stats", "jsonrpc.html#rpc_nvmf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md984", null ],
          [ "Response", "jsonrpc.html#autotoc_md985", null ],
          [ "Example", "jsonrpc.html#autotoc_md986", null ]
        ] ],
        [ "nvmf_set_crdt", "jsonrpc.html#rpc_nvmf_set_crdt", [
          [ "Parameters", "jsonrpc.html#autotoc_md987", null ]
        ] ]
      ] ],
      [ "Vfio-user Target", "jsonrpc.html#jsonrpc_components_vfu_tgt", [
        [ "vfu_tgt_set_base_path", "jsonrpc.html#rpc_vfu_tgt_set_base_path", [
          [ "Parameters", "jsonrpc.html#autotoc_md988", null ],
          [ "Example", "jsonrpc.html#autotoc_md989", null ]
        ] ],
        [ "vfu_virtio_delete_endpoint", "jsonrpc.html#rpc_vfu_virtio_delete_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md990", null ],
          [ "Example", "jsonrpc.html#autotoc_md991", null ]
        ] ],
        [ "vfu_virtio_create_blk_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_blk_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md992", null ],
          [ "Example", "jsonrpc.html#autotoc_md993", null ]
        ] ],
        [ "vfu_virtio_scsi_add_target", "jsonrpc.html#rpc_vfu_virtio_scsi_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md994", null ],
          [ "Example", "jsonrpc.html#autotoc_md995", null ]
        ] ],
        [ "vfu_virtio_scsi_remove_target", "jsonrpc.html#rpc_vfu_virtio_scsi_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md996", null ],
          [ "Example", "jsonrpc.html#autotoc_md997", null ]
        ] ],
        [ "vfu_virtio_create_scsi_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_scsi_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md998", null ],
          [ "Example", "jsonrpc.html#autotoc_md999", null ]
        ] ],
        [ "vfu_virtio_create_fs_endpoint", "jsonrpc.html#rpc_vfu_virtio_create_fs_endpoint", [
          [ "Parameters", "jsonrpc.html#autotoc_md1000", null ],
          [ "Example", "jsonrpc.html#autotoc_md1001", null ]
        ] ]
      ] ],
      [ "Vhost Target", "jsonrpc.html#jsonrpc_components_vhost_tgt", [
        [ "vhost_controller_set_coalescing", "jsonrpc.html#rpc_vhost_controller_set_coalescing", [
          [ "Parameters", "jsonrpc.html#autotoc_md1002", null ],
          [ "Example", "jsonrpc.html#autotoc_md1003", null ]
        ] ],
        [ "vhost_create_scsi_controller", "jsonrpc.html#rpc_vhost_create_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1004", null ],
          [ "Example", "jsonrpc.html#autotoc_md1005", null ]
        ] ],
        [ "vhost_start_scsi_controller", "jsonrpc.html#rpc_vhost_start_scsi_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1006", null ],
          [ "Example", "jsonrpc.html#autotoc_md1007", null ]
        ] ],
        [ "vhost_scsi_controller_add_target", "jsonrpc.html#rpc_vhost_scsi_controller_add_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1008", null ],
          [ "Response", "jsonrpc.html#autotoc_md1009", null ],
          [ "Example", "jsonrpc.html#autotoc_md1010", null ]
        ] ],
        [ "vhost_scsi_controller_remove_target", "jsonrpc.html#rpc_vhost_scsi_controller_remove_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1011", null ],
          [ "Example", "jsonrpc.html#autotoc_md1012", null ]
        ] ],
        [ "virtio_blk_create_transport", "jsonrpc.html#rpc_virtio_blk_create_transport", [
          [ "Parameters", "jsonrpc.html#autotoc_md1013", null ],
          [ "Example", "jsonrpc.html#autotoc_md1014", null ]
        ] ],
        [ "virtio_blk_get_transports", "jsonrpc.html#rpc_virtio_blk_get_transports", [
          [ "Parameters", "jsonrpc.html#autotoc_md1015", null ],
          [ "Example", "jsonrpc.html#autotoc_md1016", null ]
        ] ],
        [ "vhost_create_blk_controller", "jsonrpc.html#rpc_vhost_create_blk_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1017", null ],
          [ "Example", "jsonrpc.html#autotoc_md1018", null ]
        ] ],
        [ "vhost_get_controllers", "jsonrpc.html#rpc_vhost_get_controllers", [
          [ "Parameters", "jsonrpc.html#autotoc_md1019", null ],
          [ "Response", "jsonrpc.html#autotoc_md1020", [
            [ "Vhost block", "jsonrpc.html#rpc_vhost_get_controllers_blk", null ],
            [ "Vhost SCSI", "jsonrpc.html#rpc_vhost_get_controllers_scsi", null ],
            [ "Vhost SCSI LUN", "jsonrpc.html#rpc_vhost_get_controllers_scsi_luns", null ]
          ] ],
          [ "Example", "jsonrpc.html#autotoc_md1021", null ]
        ] ],
        [ "vhost_delete_controller", "jsonrpc.html#rpc_vhost_delete_controller", [
          [ "Parameters", "jsonrpc.html#autotoc_md1022", null ],
          [ "Example", "jsonrpc.html#autotoc_md1023", null ]
        ] ]
      ] ],
      [ "Logical Volume", "jsonrpc.html#jsonrpc_components_lvol", [
        [ "bdev_lvol_create_lvstore", "jsonrpc.html#rpc_bdev_lvol_create_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1024", null ],
          [ "Response", "jsonrpc.html#autotoc_md1025", null ],
          [ "Example", "jsonrpc.html#autotoc_md1026", null ]
        ] ],
        [ "bdev_lvol_delete_lvstore", "jsonrpc.html#rpc_bdev_lvol_delete_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1027", null ],
          [ "Example", "jsonrpc.html#autotoc_md1028", null ]
        ] ],
        [ "bdev_lvol_get_lvstores", "jsonrpc.html#rpc_bdev_lvol_get_lvstores", [
          [ "Parameters", "jsonrpc.html#autotoc_md1029", null ],
          [ "Example", "jsonrpc.html#autotoc_md1030", null ]
        ] ],
        [ "bdev_lvol_rename_lvstore", "jsonrpc.html#rpc_bdev_lvol_rename_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1031", null ],
          [ "Example", "jsonrpc.html#autotoc_md1032", null ]
        ] ],
        [ "bdev_lvol_grow_lvstore", "jsonrpc.html#rpc_bdev_lvol_grow_lvstore", [
          [ "Parameters", "jsonrpc.html#autotoc_md1033", null ],
          [ "Example", "jsonrpc.html#autotoc_md1034", null ]
        ] ],
        [ "bdev_lvol_create", "jsonrpc.html#rpc_bdev_lvol_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1035", null ],
          [ "Response", "jsonrpc.html#autotoc_md1036", null ],
          [ "Example", "jsonrpc.html#autotoc_md1037", null ]
        ] ],
        [ "bdev_lvol_snapshot", "jsonrpc.html#rpc_bdev_lvol_snapshot", [
          [ "Parameters", "jsonrpc.html#autotoc_md1038", null ],
          [ "Response", "jsonrpc.html#autotoc_md1039", null ],
          [ "Example", "jsonrpc.html#autotoc_md1040", null ]
        ] ],
        [ "bdev_lvol_clone", "jsonrpc.html#rpc_bdev_lvol_clone", [
          [ "Parameters", "jsonrpc.html#autotoc_md1041", null ],
          [ "Response", "jsonrpc.html#autotoc_md1042", null ],
          [ "Example", "jsonrpc.html#autotoc_md1043", null ]
        ] ],
        [ "bdev_lvol_clone_bdev", "jsonrpc.html#rpc_bdev_lvol_clone_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1044", null ],
          [ "Response", "jsonrpc.html#autotoc_md1045", null ],
          [ "Example", "jsonrpc.html#autotoc_md1046", null ]
        ] ],
        [ "bdev_lvol_rename", "jsonrpc.html#rpc_bdev_lvol_rename", [
          [ "Parameters", "jsonrpc.html#autotoc_md1047", null ],
          [ "Example", "jsonrpc.html#autotoc_md1048", null ]
        ] ],
        [ "bdev_lvol_resize", "jsonrpc.html#rpc_bdev_lvol_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md1049", null ],
          [ "Example", "jsonrpc.html#autotoc_md1050", null ]
        ] ],
        [ "bdev_lvol_set_read_only", "jsonrpc.html#rpc_bdev_lvol_set_read_only", [
          [ "Parameters", "jsonrpc.html#autotoc_md1051", null ],
          [ "Example", "jsonrpc.html#autotoc_md1052", null ]
        ] ],
        [ "bdev_lvol_delete", "jsonrpc.html#rpc_bdev_lvol_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1053", null ],
          [ "Example", "jsonrpc.html#autotoc_md1054", null ]
        ] ],
        [ "bdev_lvol_inflate", "jsonrpc.html#rpc_bdev_lvol_inflate", [
          [ "Parameters", "jsonrpc.html#autotoc_md1055", null ],
          [ "Example", "jsonrpc.html#autotoc_md1056", null ]
        ] ],
        [ "bdev_lvol_decouple_parent", "jsonrpc.html#rpc_bdev_lvol_decouple_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md1057", null ],
          [ "Example", "jsonrpc.html#autotoc_md1058", null ]
        ] ],
        [ "bdev_lvol_get_lvols", "jsonrpc.html#rpc_bdev_lvol_get_lvols", [
          [ "Parameters", "jsonrpc.html#autotoc_md1059", null ],
          [ "Example", "jsonrpc.html#autotoc_md1060", null ]
        ] ],
        [ "bdev_lvol_set_parent", "jsonrpc.html#rpc_bdev_lvol_set_parent", [
          [ "Parameters", "jsonrpc.html#autotoc_md1061", null ],
          [ "Example", "jsonrpc.html#autotoc_md1062", null ]
        ] ],
        [ "bdev_lvol_set_parent_bdev", "jsonrpc.html#rpc_bdev_lvol_set_parent_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1063", null ],
          [ "Example", "jsonrpc.html#autotoc_md1064", null ]
        ] ],
        [ "bdev_lvol_start_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_start_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md1065", null ],
          [ "Response", "jsonrpc.html#autotoc_md1066", null ],
          [ "Example", "jsonrpc.html#autotoc_md1067", null ]
        ] ],
        [ "bdev_lvol_check_shallow_copy", "jsonrpc.html#rpc_bdev_lvol_check_shallow_copy", [
          [ "Parameters", "jsonrpc.html#autotoc_md1068", null ],
          [ "Response", "jsonrpc.html#autotoc_md1069", null ],
          [ "Example", "jsonrpc.html#autotoc_md1070", null ]
        ] ]
      ] ],
      [ "RAID", "jsonrpc.html#jsonrpc_components_raid", [
        [ "bdev_raid_set_options", "jsonrpc.html#rpc_bdev_raid_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1071", null ],
          [ "Example", "jsonrpc.html#autotoc_md1072", null ]
        ] ],
        [ "bdev_raid_get_bdevs", "jsonrpc.html#rpc_bdev_raid_get_bdevs", [
          [ "Parameters", "jsonrpc.html#autotoc_md1073", null ],
          [ "Example", "jsonrpc.html#autotoc_md1074", null ]
        ] ],
        [ "bdev_raid_create", "jsonrpc.html#rpc_bdev_raid_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1075", null ],
          [ "Example", "jsonrpc.html#autotoc_md1076", null ]
        ] ],
        [ "bdev_raid_delete", "jsonrpc.html#rpc_bdev_raid_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1077", null ],
          [ "Example", "jsonrpc.html#autotoc_md1078", null ]
        ] ],
        [ "bdev_raid_add_base_bdev", "jsonrpc.html#rpc_bdev_raid_add_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1079", null ],
          [ "Example", "jsonrpc.html#autotoc_md1080", null ]
        ] ],
        [ "bdev_raid_remove_base_bdev", "jsonrpc.html#rpc_bdev_raid_remove_base_bdev", [
          [ "Parameters", "jsonrpc.html#autotoc_md1081", null ],
          [ "Example", "jsonrpc.html#autotoc_md1082", null ]
        ] ]
      ] ],
      [ "SPLIT", "jsonrpc.html#jsonrpc_components_split", [
        [ "bdev_split_create", "jsonrpc.html#rpc_bdev_split_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1083", null ],
          [ "Example", "jsonrpc.html#autotoc_md1084", null ]
        ] ],
        [ "bdev_split_delete", "jsonrpc.html#rpc_bdev_split_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1085", null ],
          [ "Example", "jsonrpc.html#autotoc_md1086", null ]
        ] ]
      ] ],
      [ "Uring", "jsonrpc.html#jsonrpc_components_uring", [
        [ "bdev_uring_create", "jsonrpc.html#rpc_bdev_uring_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1087", null ],
          [ "Example", "jsonrpc.html#autotoc_md1088", null ]
        ] ],
        [ "bdev_uring_rescan", "jsonrpc.html#rpc_bdev_uring_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md1089", null ],
          [ "Example", "jsonrpc.html#autotoc_md1090", null ]
        ] ],
        [ "bdev_uring_delete", "jsonrpc.html#rpc_bdev_uring_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1091", null ],
          [ "Example", "jsonrpc.html#autotoc_md1092", null ]
        ] ]
      ] ],
      [ "OPAL", "jsonrpc.html#jsonrpc_components_opal", [
        [ "bdev_nvme_opal_init", "jsonrpc.html#rpc_bdev_nvme_opal_init", [
          [ "Parameters", "jsonrpc.html#autotoc_md1093", null ],
          [ "Example", "jsonrpc.html#autotoc_md1094", null ]
        ] ],
        [ "bdev_nvme_opal_revert", "jsonrpc.html#rpc_bdev_nvme_opal_revert", [
          [ "Parameters", "jsonrpc.html#autotoc_md1095", null ],
          [ "Example", "jsonrpc.html#autotoc_md1096", null ]
        ] ],
        [ "bdev_opal_create", "jsonrpc.html#rpc_bdev_opal_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1097", null ],
          [ "Response", "jsonrpc.html#autotoc_md1098", null ],
          [ "Example", "jsonrpc.html#autotoc_md1099", null ]
        ] ],
        [ "bdev_opal_get_info", "jsonrpc.html#rpc_bdev_opal_get_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1100", null ],
          [ "Response", "jsonrpc.html#autotoc_md1101", null ],
          [ "Example", "jsonrpc.html#autotoc_md1102", null ]
        ] ],
        [ "bdev_opal_delete", "jsonrpc.html#rpc_bdev_opal_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1103", null ],
          [ "Example", "jsonrpc.html#autotoc_md1104", null ]
        ] ],
        [ "bdev_opal_new_user", "jsonrpc.html#rpc_bdev_opal_new_user", [
          [ "Parameters", "jsonrpc.html#autotoc_md1105", null ],
          [ "Example", "jsonrpc.html#autotoc_md1106", null ]
        ] ],
        [ "bdev_opal_set_lock_state", "jsonrpc.html#rpc_bdev_opal_set_lock_state", [
          [ "Parameters", "jsonrpc.html#autotoc_md1107", null ],
          [ "Example", "jsonrpc.html#autotoc_md1108", null ]
        ] ]
      ] ],
      [ "Notifications", "jsonrpc.html#jsonrpc_components_notify", [
        [ "notify_get_types", "jsonrpc.html#rpc_notify_get_types", [
          [ "Parameters", "jsonrpc.html#autotoc_md1109", null ],
          [ "Response", "jsonrpc.html#autotoc_md1110", null ],
          [ "Example", "jsonrpc.html#autotoc_md1111", null ]
        ] ],
        [ "notify_get_notifications", "jsonrpc.html#rpc_notify_get_notifications", [
          [ "Parameters", "jsonrpc.html#autotoc_md1112", null ],
          [ "Response", "jsonrpc.html#autotoc_md1113", null ],
          [ "Example", "jsonrpc.html#autotoc_md1114", null ]
        ] ]
      ] ],
      [ "Keyring", "jsonrpc.html#jsonrpc_components_keyring", [
        [ "keyring_file_add_key", "jsonrpc.html#rpc_keyring_file_add_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md1115", null ],
          [ "Example", "jsonrpc.html#autotoc_md1116", null ]
        ] ],
        [ "keyring_file_remove_key", "jsonrpc.html#rpc_keyring_file_remove_key", [
          [ "Parameters", "jsonrpc.html#autotoc_md1117", null ],
          [ "Example", "jsonrpc.html#autotoc_md1118", null ]
        ] ],
        [ "keyring_get_keys", "jsonrpc.html#rpc_keyring_get_keys", [
          [ "Parameters", "jsonrpc.html#autotoc_md1119", null ],
          [ "Example", "jsonrpc.html#autotoc_md1120", null ]
        ] ],
        [ "keyring_linux_set_options", "jsonrpc.html#rpc_keyring_linux_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1121", null ],
          [ "Example", "jsonrpc.html#autotoc_md1122", null ]
        ] ]
      ] ],
      [ "Linux Userspace Block Device (UBLK)", "jsonrpc.html#jsonrpc_components_ublk", [
        [ "ublk_create_target", "jsonrpc.html#rpc_ublk_create_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1123", null ],
          [ "Response", "jsonrpc.html#autotoc_md1124", null ],
          [ "Example", "jsonrpc.html#autotoc_md1125", null ]
        ] ],
        [ "ublk_destroy_target", "jsonrpc.html#rpc_ublk_destroy_target", [
          [ "Parameters", "jsonrpc.html#autotoc_md1126", null ],
          [ "Response", "jsonrpc.html#autotoc_md1127", null ],
          [ "Example", "jsonrpc.html#autotoc_md1128", null ]
        ] ],
        [ "ublk_start_disk", "jsonrpc.html#rpc_ublk_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1129", null ],
          [ "Response", "jsonrpc.html#autotoc_md1130", null ],
          [ "Example", "jsonrpc.html#autotoc_md1131", null ]
        ] ],
        [ "ublk_recover_disk", "jsonrpc.html#rpc_ublk_recover_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1132", null ],
          [ "Response", "jsonrpc.html#autotoc_md1133", null ],
          [ "Example", "jsonrpc.html#autotoc_md1134", null ]
        ] ],
        [ "ublk_stop_disk", "jsonrpc.html#rpc_ublk_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1135", null ],
          [ "Response", "jsonrpc.html#autotoc_md1136", null ],
          [ "Example", "jsonrpc.html#autotoc_md1137", null ]
        ] ],
        [ "ublk_get_disks", "jsonrpc.html#rpc_ublk_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md1138", null ],
          [ "Response", "jsonrpc.html#autotoc_md1139", null ],
          [ "Example", "jsonrpc.html#autotoc_md1140", null ]
        ] ]
      ] ],
      [ "Linux Network Block Device (NBD)", "jsonrpc.html#jsonrpc_components_nbd", [
        [ "nbd_start_disk", "jsonrpc.html#rpc_nbd_start_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1141", null ],
          [ "Response", "jsonrpc.html#autotoc_md1142", null ],
          [ "Example", "jsonrpc.html#autotoc_md1143", null ]
        ] ],
        [ "nbd_stop_disk", "jsonrpc.html#rpc_nbd_stop_disk", [
          [ "Parameters", "jsonrpc.html#autotoc_md1144", null ],
          [ "Example", "jsonrpc.html#autotoc_md1145", null ]
        ] ],
        [ "nbd_get_disks", "jsonrpc.html#rpc_nbd_get_disks", [
          [ "Parameters", "jsonrpc.html#autotoc_md1146", null ],
          [ "Response", "jsonrpc.html#autotoc_md1147", null ],
          [ "Example", "jsonrpc.html#autotoc_md1148", null ]
        ] ]
      ] ],
      [ "Socket layer", "jsonrpc.html#jsonrpc_components_sock", [
        [ "sock_impl_get_options", "jsonrpc.html#rpc_sock_impl_get_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1149", null ],
          [ "Response", "jsonrpc.html#autotoc_md1150", null ],
          [ "Example", "jsonrpc.html#autotoc_md1151", null ]
        ] ],
        [ "sock_impl_set_options", "jsonrpc.html#rpc_sock_impl_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1152", null ],
          [ "Response", "jsonrpc.html#autotoc_md1153", null ],
          [ "Example", "jsonrpc.html#autotoc_md1154", null ]
        ] ],
        [ "sock_set_default_impl", "jsonrpc.html#rpc_sock_set_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md1155", null ],
          [ "Response", "jsonrpc.html#autotoc_md1156", null ],
          [ "Example", "jsonrpc.html#autotoc_md1157", null ]
        ] ],
        [ "sock_get_default_impl", "jsonrpc.html#rpc_sock_get_default_impl", [
          [ "Parameters", "jsonrpc.html#autotoc_md1158", null ],
          [ "Response", "jsonrpc.html#autotoc_md1159", null ],
          [ "Example", "jsonrpc.html#autotoc_md1160", null ]
        ] ]
      ] ],
      [ "Miscellaneous RPC commands", "jsonrpc.html#jsonrpc_components_misc", [
        [ "bdev_nvme_send_cmd", "jsonrpc.html#rpc_bdev_nvme_send_cmd", [
          [ "Parameters", "jsonrpc.html#autotoc_md1161", null ],
          [ "Response", "jsonrpc.html#autotoc_md1162", null ],
          [ "Example", "jsonrpc.html#autotoc_md1163", null ]
        ] ],
        [ "vmd_enable", "jsonrpc.html#rpc_vmd_enable", [
          [ "Parameters", "jsonrpc.html#autotoc_md1164", null ],
          [ "Response", "jsonrpc.html#autotoc_md1165", null ],
          [ "Example", "jsonrpc.html#autotoc_md1166", null ]
        ] ],
        [ "vmd_remove_device", "jsonrpc.html#rpc_vmd_remove_device", [
          [ "Parameters", "jsonrpc.html#autotoc_md1167", null ],
          [ "Example", "jsonrpc.html#autotoc_md1168", null ]
        ] ],
        [ "vmd_rescan", "jsonrpc.html#rpc_vmd_rescan", [
          [ "Parameters", "jsonrpc.html#autotoc_md1169", null ],
          [ "Response", "jsonrpc.html#autotoc_md1170", null ],
          [ "Example", "jsonrpc.html#autotoc_md1171", null ]
        ] ],
        [ "spdk_get_version", "jsonrpc.html#rpc_spdk_get_version", [
          [ "Parameters", "jsonrpc.html#autotoc_md1172", null ],
          [ "Response", "jsonrpc.html#autotoc_md1173", null ],
          [ "Example", "jsonrpc.html#autotoc_md1174", null ]
        ] ],
        [ "framework_get_pci_devices", "jsonrpc.html#rpc_framework_get_pci_devices", [
          [ "Parameters", "jsonrpc.html#autotoc_md1175", null ],
          [ "Response", "jsonrpc.html#autotoc_md1176", null ],
          [ "Example", "jsonrpc.html#autotoc_md1177", null ]
        ] ],
        [ "bdev_nvme_add_error_injection", "jsonrpc.html#rpc_bdev_nvme_add_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md1178", null ],
          [ "Response", "jsonrpc.html#autotoc_md1179", null ],
          [ "Example", "jsonrpc.html#autotoc_md1180", null ]
        ] ],
        [ "bdev_nvme_remove_error_injection", "jsonrpc.html#rpc_bdev_nvme_remove_error_injection", [
          [ "Parameters", "jsonrpc.html#autotoc_md1181", null ],
          [ "Response", "jsonrpc.html#autotoc_md1182", null ],
          [ "Example", "jsonrpc.html#autotoc_md1183", null ]
        ] ],
        [ "bdev_daos_create", "jsonrpc.html#rpc_bdev_daos_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1184", null ],
          [ "Response", "jsonrpc.html#autotoc_md1185", null ],
          [ "Example", "jsonrpc.html#autotoc_md1186", null ]
        ] ],
        [ "bdev_daos_delete", "jsonrpc.html#rpc_bdev_daos_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1187", null ],
          [ "Example", "jsonrpc.html#autotoc_md1188", null ]
        ] ],
        [ "bdev_daos_resize", "jsonrpc.html#rpc_bdev_daos_resize", [
          [ "Parameters", "jsonrpc.html#autotoc_md1189", null ],
          [ "Example", "jsonrpc.html#autotoc_md1190", null ]
        ] ],
        [ "iobuf_set_options", "jsonrpc.html#rpc_iobuf_set_options", [
          [ "Parameters", "jsonrpc.html#autotoc_md1191", null ],
          [ "Example", "jsonrpc.html#autotoc_md1192", null ]
        ] ],
        [ "iobuf_get_stats", "jsonrpc.html#rpc_iobuf_get_stats", [
          [ "Parameters", "jsonrpc.html#autotoc_md1193", null ],
          [ "Example", "jsonrpc.html#autotoc_md1194", null ]
        ] ],
        [ "bdev_nvme_start_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_start_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1195", null ],
          [ "Example", "jsonrpc.html#autotoc_md1196", null ]
        ] ],
        [ "bdev_nvme_stop_mdns_discovery", "jsonrpc.html#rpc_bdev_nvme_stop_mdns_discovery", [
          [ "Parameters", "jsonrpc.html#autotoc_md1197", null ],
          [ "Example", "jsonrpc.html#autotoc_md1198", null ]
        ] ],
        [ "bdev_nvme_get_mdns_discovery_info", "jsonrpc.html#rpc_bdev_nvme_get_mdns_discovery_info", [
          [ "Parameters", "jsonrpc.html#autotoc_md1199", null ],
          [ "Example", "jsonrpc.html#autotoc_md1200", null ]
        ] ],
        [ "nvmf_publish_mdns_prr", "jsonrpc.html#rpc_nvmf_publish_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md1201", null ],
          [ "Example", "jsonrpc.html#autotoc_md1202", null ]
        ] ],
        [ "nvmf_stop_mdns_prr", "jsonrpc.html#rpc_nvmf_stop_mdns_prr", [
          [ "Parameters", "jsonrpc.html#autotoc_md1203", null ],
          [ "Example", "jsonrpc.html#autotoc_md1204", null ]
        ] ]
      ] ],
      [ "fsdev", "jsonrpc.html#jsonrpc_components_fsdev", [
        [ "fsdev_get_opts", "jsonrpc.html#rpc_fsdev_get_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md1205", null ],
          [ "Example", "jsonrpc.html#autotoc_md1206", null ]
        ] ],
        [ "fsdev_set_opts", "jsonrpc.html#rpc_fsdev_set_opts", [
          [ "Parameters", "jsonrpc.html#autotoc_md1207", null ],
          [ "Example", "jsonrpc.html#autotoc_md1208", null ]
        ] ],
        [ "fsdev_aio_create", "jsonrpc.html#rpc_fsdev_aio_create", [
          [ "Parameters", "jsonrpc.html#autotoc_md1209", null ],
          [ "Example", "jsonrpc.html#autotoc_md1210", null ]
        ] ],
        [ "fsdev_aio_delete", "jsonrpc.html#rpc_fsdev_aio_delete", [
          [ "Parameters", "jsonrpc.html#autotoc_md1211", null ],
          [ "Example", "jsonrpc.html#autotoc_md1212", null ]
        ] ]
      ] ]
    ] ],
    [ "JSON-RPC Remote access", "jsonrpc_proxy.html", [
      [ "Parameters", "jsonrpc_proxy.html#autotoc_md1305", null ],
      [ "Example usage", "jsonrpc_proxy.html#autotoc_md1306", null ],
      [ "Returns", "jsonrpc_proxy.html#autotoc_md1307", null ],
      [ "Client side", "jsonrpc_proxy.html#autotoc_md1308", null ]
    ] ],
    [ "Userspace DTrace (USDT)", "usdt.html", [
      [ "Building bpftrace", "usdt.html#autotoc_md1363", null ],
      [ "bpftrace.sh", "usdt.html#autotoc_md1364", null ],
      [ "Configuring SPDK Build", "usdt.html#autotoc_md1365", null ],
      [ "Start SPDK application and bpftrace script", "usdt.html#autotoc_md1366", null ],
      [ "TODOs and known limitations", "usdt.html#autotoc_md1367", null ]
    ] ],
    [ "Tracing Framework", "tracepoints.html", [
      [ "Introduction", "tracepoints.html#tracepoints_intro", null ],
      [ "Enabling Tracepoints", "tracepoints.html#enable_tracepoints", [
        [ "Enabling Tracepoints in Groups", "tracepoints.html#autotoc_md1353", null ],
        [ "Enabling Individual Tracepoints", "tracepoints.html#autotoc_md1354", null ],
        [ "Combining Tracepoint Masks", "tracepoints.html#autotoc_md1355", null ],
        [ "Tracepoint Group Names", "tracepoints.html#autotoc_md1356", null ],
        [ "Starting the SPDK Target", "tracepoints.html#autotoc_md1357", null ]
      ] ],
      [ "Capturing a snapshot of events", "tracepoints.html#capture_tracepoints", null ],
      [ "Capturing sufficient trace events", "tracepoints.html#capture_trace_events", null ],
      [ "Clearing Trace History", "tracepoints.html#clear_trace_history", null ],
      [ "Querying Tracepoint Status", "tracepoints.html#query_tpoint_status", null ],
      [ "Adding New Tracepoints", "tracepoints.html#add_tracepoints", null ]
    ] ],
    [ "NVMe Multipath", "nvme_multipath.html", [
      [ "Introduction", "nvme_multipath.html#autotoc_md1309", null ],
      [ "Design", "nvme_multipath.html#autotoc_md1310", [
        [ "Multipath Mode", "nvme_multipath.html#autotoc_md1311", null ],
        [ "Path Error Recovery", "nvme_multipath.html#autotoc_md1312", null ],
        [ "Path Selection", "nvme_multipath.html#autotoc_md1313", null ],
        [ "I/O Retry", "nvme_multipath.html#autotoc_md1314", null ],
        [ "Asymmetric Namespace Accesses (ANA) Handling", "nvme_multipath.html#autotoc_md1315", null ],
        [ "I/O Timeout", "nvme_multipath.html#autotoc_md1316", null ]
      ] ],
      [ "Usage", "nvme_multipath.html#autotoc_md1317", null ],
      [ "Limitations", "nvme_multipath.html#autotoc_md1318", null ]
    ] ],
    [ "NVMe-oF Multipath HOWTO", "nvmf_multipath_howto.html", [
      [ "Build SPDK on both the initiator and target servers", "nvmf_multipath_howto.html#autotoc_md1334", null ],
      [ "Setup hugepages", "nvmf_multipath_howto.html#autotoc_md1335", null ],
      [ "On target: start and configure SPDK", "nvmf_multipath_howto.html#autotoc_md1336", null ],
      [ "On initiator: start and configure bdevperf", "nvmf_multipath_howto.html#autotoc_md1337", null ],
      [ "Launch a bdevperf test", "nvmf_multipath_howto.html#autotoc_md1338", null ],
      [ "Switching paths", "nvmf_multipath_howto.html#autotoc_md1339", null ],
      [ "Use round-robin (active_active) path load balancing", "nvmf_multipath_howto.html#autotoc_md1340", null ]
    ] ],
    [ "Storage Management Agent", "sma.html", [
      [ "Interface", "sma.html#autotoc_md1341", [
        [ "CreateDevice", "sma.html#autotoc_md1342", null ],
        [ "DeleteDevice", "sma.html#autotoc_md1343", null ],
        [ "AttachVolume", "sma.html#autotoc_md1344", null ],
        [ "DetachVolume", "sma.html#autotoc_md1345", null ],
        [ "SetQos", "sma.html#autotoc_md1346", null ],
        [ "GetQosCapabilities", "sma.html#autotoc_md1347", null ]
      ] ],
      [ "Running and Configuration", "sma.html#autotoc_md1348", null ],
      [ "Plugins", "sma.html#autotoc_md1349", null ]
    ] ],
    [ "ublk Target", "ublk.html", [
      [ "Table of Contents", "ublk.html#ublk_toc", null ],
      [ "Introduction", "ublk.html#ublk_intro", null ],
      [ "ublk Internal", "ublk.html#ublk_internal", [
        [ "Control Plane", "ublk.html#autotoc_md1358", null ],
        [ "Data Plane", "ublk.html#autotoc_md1359", null ]
      ] ],
      [ "SPDK Implementation", "ublk.html#ublk_impl", null ],
      [ "Operation", "ublk.html#ublk_op", [
        [ "Enabling SPDK ublk target", "ublk.html#autotoc_md1360", null ],
        [ "Creating ublk block device", "ublk.html#autotoc_md1361", null ],
        [ "Deleting ublk block device and exit", "ublk.html#autotoc_md1362", null ]
      ] ]
    ] ]
];